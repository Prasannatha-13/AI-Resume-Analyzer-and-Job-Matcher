const express = require('express')
const  cors =require('cors')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  UserModel =require('./mongo.js')
const multer =require('multer')
const path=require('path')
const fs = require('fs');
const pdfParse= require("pdf-parse");
const OpenAI = require("openai");
require('dotenv').config();


const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

// require('dotenv').config();

const app=express();
app.use('/uploads', express.static('uploads'));
app.use(cors())
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("welcome");
})

app.post('/create', async (req,res)=>{
  try{

    const { username,email,password }=req.body;
    
    const Exists =await UserModel.findOne({email})

    if(Exists){
        return res.status(400).json({ msg: "User already exists" });
    }
    
    const hashedpw=await bcrypt.hash(password,10)

    const created=await UserModel.create({
        username,
        email,
        password:hashedpw
    })
    console.log(created)
    res.json({msg:"Signed in"})
  }catch(err){
    console.error(err);
  }

})

app.post('/login',async (req,res)=>{

  try{
    
    const { email,password }=req.body;
  
    let find=await UserModel.findOne({email})

    if(!find) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password,find.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }
    console.log("logged in")
     res.json({ msg: "Login successful" });
  }catch(err){
    console.error(err);
  }
})

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}


app.post('/upload', upload.single("resume"), async (req,res)=>{

    try{
      const email=req.body?.email;

      if(!req.file){
        return res.status(400).json({msg:"no file Uploaded"})
      }
     await UserModel.findOneAndUpdate(
        { email:email },
        {
         resume:req.file.filename ,
         description:req.body.description
        },
         { returnDocument: 'after' }
     )

     res.json({msg:"Resume Uploaded & saved to DB"})
    }
    catch(err){
       console.error(err);
       res.status(500).json({ msg: "Upload failed" });
    }
});


app.post('/analyze',upload.single("resume"), async (req,res)=>{
          
      try{

        console.log("FILE:", req.file);
        const email=req.body.email
        const filepath=req.file.path;
        const databuffer=fs.readFileSync(filepath);
        const pdfData= await pdfParse(databuffer);
        const text = pdfData.text.slice(0, 4000);
        const jobdescription=req.body.jobdescription;

        const data = await openai.chat.completions.create({
          model: "llama-3.3-70b-versatile",
          messages: [
        {
          role: "user",
          content: `
           You are a resume analyzer.
           Return ONLY valid JSON.
           Do NOT include explanation.
           Do NOT include markdown (no \`\`\`).
           here's the Job description by an user:${jobdescription}
           mention some jobs matches(2-3) according to resume rather than job description

        {
         "skills": [],
         "score": number(1-100),
         "strengths": [],
         "weaknesses": [],
         "suggestions": [],
         "jobmatch": {
            "matchpercentage": number (1-100),
            "matchedskills": [],
            "missingskills": [],
            "summary": ""
         }
          "jobmatches":{
          "jobtittle":"",
          "company":"",
          "matchpercentage":number(1-100)
          }

          Resume:
          ${text}
          `
         }
        ]
       });
       let raw= data.choices[0].message.content;
       const parsed=JSON.parse(raw)
      
        await UserModel.findOneAndUpdate(
           { email: email }, 
           { results: parsed }, 
           { returnDocument: 'after' } 
    );
       let user=await UserModel.findOne({email:email})
        console.log(user.results)
        res.json(user);

      }catch (err){
         console.error(err);
         res.status(500).json({ msg: "Analysis failed" })
      }
})
 
app.put('/add', upload.single('profilePic'), async (req,res)=>{
    
  const email=req.body.email
  const password=req.body.password
  const hashedpw=await bcrypt.hash(password,10)

  const updatedData={
           
            work:req.body.work,
            achievements:req.body.achievements,
            education:req.body.education,
            username: req.body.newusername,
            email: req.body.newemail,
            password:hashedpw
  }
  if(req.file){
   updatedData.profilePic = req.file.filename;
}

    await UserModel.findOneAndUpdate(
           { email:email}, 
            updatedData, 
           { returnDocument: 'after' } 
    );
    let inform=await UserModel.findOne({email:email})
    res.json(inform);
})
app.put('/about',async(req,res)=>{
  const email=req.body.email
  await UserModel.findOneAndUpdate(
    {email:email},
    {
      about:req.body.about,
      education:req.body.education,
      work:req.body.work,
      achievements:req.body.achievements
    },
    {returnDocument:'after'}

  );
  let data=await UserModel.findOne({email:email});
  res.json(data);
})

app.put('/hash',async (req,res)=>{
    const password=req.body.password;
    const hashedpw=await bcrypt.hash(password,10)
    res.json(hashed)
    
})

app.post("/profilepic", upload.single("profilePic"), async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOneAndUpdate(
      { email },
      { profilePic: req.file.filename },
      { returnDocument:"after" }
    );

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error uploading image" });
  }
});
app.put('/newinfo',async (req,res)=>{
  const email=req.body.email

   let hashedPw = req.body.newpw;
   console.log(hashedPw)

    if (hashedPw) {
      hashedPw = await bcrypt.hash(hashedPw, 10);
    }
    else{
      let passw=await UserModel.findOne({email:email})
      hashedPw=passw.password
    }
    console.log(hashedPw);
    const newdata=await UserModel.findOneAndUpdate(
      {email:email},
      {
        username:req.body.newname,
        email:req.body.newemail,
        password:hashedPw
      },
      {returnDocument:'after'}
    )
    console.log(newdata);
    res.json(newdata)
})
app.delete('/deleteuser',async (req,res)=>{
  const email=req.body.email
   await UserModel.deleteOne({email:email})
   res.json({msg:"user deleted"})
})
app.post('/check',async(req,res)=>{
   const email=req.body.email
   const pw=req.body.pw
   let find= await UserModel.findOne({email:email})
   const isMatch=await bcrypt.compare(pw,find.password)
   if (!isMatch) {
      return res.json({ msg: "InCorrect password" });
    }
    else{
     res.json({msg:"Password Matched"})
    }   
})
app.post("/api/auth/google-login", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { username, email, googleId } = req.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        username,
        email,
        googleId,
        password: null,
      });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("GOOGLE LOGIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
});

app.post("/refreshdata", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});
app.listen(3000,()=>{
    console.log("your server is running")
})