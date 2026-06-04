import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Eye,EyeClosed} from "lucide-react";
import { useEffect } from "react";
import { data, Link,useNavigate} from "react-router-dom";
import resumeimg from '/blurred_resume.png'



function Profile({results,setresults,info,setinfo,formData,setFormData}) {

  const [profilePic, setProfilePic] = useState(null);
  const [imagefile,setimagefile]=useState(null)
  const email=localStorage.getItem("email")
  const [openAbout, setOpenAbout] = useState(false);
  const [about, setAbout] = useState("");
  const [openwork,setopenwork]=useState(false);
  const [work,setwork]=useState('');
  const [openEducation ,setOpenEducation]=useState(false);
  const [education,seteducation]=useState('')
  const [achievements,setachievements]=useState('')
  const [openAchievements,setOpenAchievements]=useState(false)
  const [openEdit,setOpenEdit]=useState(false)
  const [openSettings,setOpenSettings]=useState(false)
  const [showpassword,setshowpassword]=useState(false)
  const [shownewpw,setshownewpw]=useState(false)
  const [n,setn]=useState("")
  const [em,setem]=useState("");
  const [msg,setmsg]=useState("");


  

useEffect(() => {
  if (info) {
    setAbout(info.about || "");
    seteducation(info.education || "");
    setwork(info.work || "");
    setachievements(info.achievements || "");
  }
  if(info?.profilePic){
    setProfilePic(
        `http://localhost:3000/uploads/${info.profilePic}`
      );
  }
}, [info]);
  const navigate=useNavigate();

  const [newall,setnewall]=useState({
     newname:"",
     newemail:"",
     newpw:""
  })
  

  const handleChange = (e) => {
    setnewall({
      ...newall,
      [e.target.name]: e.target.value,
    });
    
  };

  function handleImageChange(e) {
    const file = e.target.files[0];
   
    if (file) {
       setimagefile(file)
       setProfilePic(URL.createObjectURL(file));
       uploadProfilePic(file)
    }
    
  }
  async function uploadProfilePic(file) {
  const fd = new FormData();

  fd.append("profilePic", file);
  fd.append("email", email);

  const res = await fetch("http://localhost:3000/profilepic", {
    method: "POST",
    body: fd,
  });

  const data = await res.json();

  setinfo({
      ...info,
      profilePic: data.profilePic,
    });
  //   if(data.profilePic){
         
  // setProfilePic(`http://localhost:3000/uploads/${data.profilePic}`);
  //   }
}

async function About(){
     try{

      let res=await fetch("http://localhost:3000/about",{
            method: "PUT",
            headers: {
         "Content-Type": "application/json",
        },
          body:JSON.stringify( {
               email:email,
               about:about,
               education:education,
               work:work,
               achievements:achievements
              })
         });
         const data=await res.json()
         console.log(data.about)
         console.log(data.education)
         console.log(data.work)
         console.log(data.achievements)
        
         setAbout(data.about)
         seteducation(data.education)
         setwork(data.work)
         setachievements(data.achievements)
     }catch(err){
        console.error(err);
     }
}

 async function newinfo() {
  try {

    let updated = { ...newall };

    if (!updated.newname){
      updated.newname = info.username;
    }

    if (!updated.newemail) {
      updated.newemail = info.email;
    }
    if(updated.newpw){
     if(msg!=="Password Matched"){
      return;
    }
  }
    
    let res=await fetch("http://localhost:3000/newinfo",{
      method:"PUT",
      headers:{
         "Content-Type": "application/json",
       },
      body:JSON.stringify({
        email:email,
        newname:updated.newname,
        newemail:updated.newemail,
        newpw:updated.newpw || ""
      })

    })
    const newdata= await res.json()
    console.log(newdata)
     setnewall({
      newname: newdata.username,
      newemail: newdata.email,
      newpw:newdata.password
    });
    localStorage.setItem("email", newdata.email);
    setn(newdata.username)
    setem(newdata.email)
    setinfo(newdata)
    
   }catch(err){
        console.error(err)
   }
 }
 async function logout(){
 
  try{
   const res=await fetch("http://localhost:3000/deleteuser",{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email:email
    })
  })
    let data =await res.json()
    console.log(data);
     localStorage.removeItem("email");
     setFormData(null);
     setinfo(null);
     setresults(null);
     setn(null);
     setem(null);
     setAbout(null)
     seteducation(null)
     setwork(null)
     setachievements(null)
     navigate("/");
   
   }catch(err){
    console.error(err);
   }
 }
   async function checkpw(e){
    const pw=e.target.value
     try{
      const res=await fetch("http://localhost:3000/check",{
      method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email:email,
      pw:pw
    })
  })
    let data =await res.json()
    console.log(data);
    setmsg(data.msg)
     }catch(err){
      console.error(err)
     }
   }

  return (
    <div >
         <div className="border">
         <h1 className="text-3xl font-bold mt-5 ml-10 mb-3">Profile</h1>
         </div>
  <div className="">
  
    <div className="flex mt-10 justify-between ">
      <div className="relative w-40 h-40 flex ml-10">

        <img
          src={
            profilePic ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="profile"
          className="w-24 h-24 rounded-full object-cover border-4 m-5 mt-2 border-gray-300"
        />

        
        <label
          className="
            absolute bottom-14 right-10
            bg-blue-500
            p-2
            rounded-full
            cursor-pointer
            hover:bg-blue-600
            shadow-lg
          "
        >
          <Camera size={18} color="white" />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
        <div className="m-5">
        <h1 className="text-2xl font-semibold">{n || info?.username }</h1>
        <p className="text-gray-500">{em || info?.email}</p>
        </div>
      </div>
      <div  className="mt-5 flex gap-5 mr-10 ">
        <p className="text-2xl font-semibold flex gap-4">Edit 
          <svg onClick={()=>setOpenEdit(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1 hover:border rounded">
           <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
         </svg>
        </p>
       {openEdit && (
         <div className="fixed inset-0
            flex items-center justify-center
            bg-black/40" onClick={() => setOpenEdit(false)}
          >
            <div className="  bg-white
              p-6
              rounded-xl
              w-[400px]
              shadow-xl" onClick={(e) => e.stopPropagation()}
            >

              <h1 className="text-2xl font-bold mb-4">
                Edit Profile
              </h1> 

           <p className="md-2 ml-2 font-semibold">Username</p> 
            <input
              type="text"
              name="newname"
              value={newall.newname}
                onChange={handleChange}
              className="
                w-full border-2 p-2 rounded-lg
                mb-4 "
            />
            <p className="md-2 ml-2 font-semibold">Email</p>
            <input
            type="email"
            name="newemail"
            value={newall.newemail}
            onChange={handleChange}
            className="w-full border-2 p-2 rounded-lg
                mb-4"
            />
            <p className="md-2 ml-2 font-semibold">Current Password</p>
          <div className="relative">
            <input
             type={showpassword ? "text":"password"}
              className="w-full border-2 p-2 rounded-lg
                mb-2"
                onChange={(e)=>checkpw(e)}
            />
             <button type="button" onClick={() => setshowpassword(!showpassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ">
               {showpassword ? <Eye size={20} /> : <EyeClosed size={20} />}
             </button>
             </div>
            {msg && <p className={` ${ 
                            msg === "Password Matched" ? "text-green-600 mb-2 ml-2" : "text-red-600 mb-2 ml-2"}`}>{msg}</p>}
            <p className="md-2 ml-2 font-semibold">New Password</p>
          <div className="relative">
            <input
             type={shownewpw ? "text":"password"}
             name="newpw"
             onChange={handleChange}
              className="w-full border-2 p-2 rounded-lg
                mb-4"
            />
                <button type="button" onClick={() => setshownewpw(!shownewpw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ">
                {shownewpw ? <Eye size={20} /> : <EyeClosed size={20} />}
               </button>
            </div>
            <button
              className="
                bg-blue-500 text-white
                px-4 py-2 rounded-lg
              "
              onClick={()=>{
                newinfo()
                setOpenEdit(false)
              }}
            >
              Save
            </button>

            </div>
          
         </div>

       )}


        <p className="text-2xl font-semibold flex gap-4">Settings
          <svg onClick={ ()=>setOpenSettings(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2 hover:border rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </p>
        {openSettings && (
          <>
           <div className="fixed inset-0
            flex items-center justify-center
            bg-black/40" onClick={() =>setOpenSettings(false)}
           >
           <div className="  bg-white
              p-6
              rounded-xl
              w-auto h-auto
              shadow-xl" onClick={(e) => e.stopPropagation()}
            >
            <div className="flex gap-3 justify-center m-0 text-xl text-red-700 hover:cursor-pointer"  onClick={logout}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
               </svg>
              <p>Logout</p>
            </div>
           </div>
          </div>

          </>
        )}
      </div>
    </div>
    <div className="flex gap-2">
      <div className="w-10/12 m-10 mr-0 mt-0 border shadow-md p-5 rounded-lg">
        <p className="text-xl font-serif">About </p>
                 {!openAbout ? (

          <>
            <p className="text-gray-600 mt-1">
              {about || "Anything about yourself"}
            </p>

            <button type="button" onClick={() => setOpenAbout(true)}
              className=" text-blue-400 hover:underline cursor-pointer  mt-2">Add About</button>
          </>

        ) : (

          <div className="mt-4">

            <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Write about yourself..."
              className="w-full h-32 border rounded-lg  p-2  outline-none resize-none "/>

            <button onClick={() =>{ 
              About()
              setOpenAbout(false)}} 
            className="mt-3 bg-blue-500 h-8 w-12  text-white mb-3 rounded-lg hover:bg-blue-600"> Save
            </button>

          </div>

        )}

          <hr/>
        <p className="text-xl font-serif mt-3">Education</p>
         {!openEducation ? (

          <>
            <p className="text-gray-600 mt-1">
              {education || "what you are studying now"}
            </p>

            <button type="button" onClick={() => setOpenEducation(true)}
              className=" text-blue-400 hover:underline cursor-pointer  mt-2">Add Education</button>
          </>

        ) : (

          <div className="mt-4">

            <textarea value={education} onChange={(e) => seteducation(e.target.value)} placeholder="Write about your Education..."
              className="w-full h-32 border rounded-lg  p-2  outline-none resize-none "/>

            <button onClick={() => {
              About()
              setOpenEducation(false)}} 
            className="mt-3 bg-blue-500 h-8 w-12  text-white mb-3 rounded-lg hover:bg-blue-600"> Save
            </button>

          </div>

        )}

          <hr/>
        <p className="text-xl font-serif mt-3">Work Experience</p>
          {!openwork ? (
            <>
            <p className="text-gray-600 mt-1 mb-2">
              {work || "your work experience"}
            </p>
            <button type="button" onClick={()=>setopenwork(true)}
            className="text-blue-400 hover:underline">Add work</button>

            </>

            ) : (

        <div className="mt-4">

            <textarea value={work} onChange={(e) => setwork(e.target.value)} placeholder="work experience..."
              className="w-full h-32 border rounded-lg  p-2  outline-none resize-none "/>

            <button onClick={() => {
              About()
              setopenwork(false)}}
            className="mt-3 bg-blue-500 h-8 w-12  text-white mb-3 rounded-lg hover:bg-blue-600"> Save
            </button>

        </div>

           )}
          <hr/>
       
        <p className="text-xl font-serif mt-3">Achievements</p>
        {!openAchievements ? (
            <>
            <p className="text-gray-600 mt-1 mb-2">
              {achievements || "your achievements"}
            </p>
            <button type="button" onClick={()=> setOpenAchievements(true)}
            className="text-blue-400 hover:underline">Add achievements</button>
            </>

            ) : (

        <div className="mt-4">

            <textarea value={achievements} onChange={(e) => setachievements(e.target.value)} placeholder="write your achievements..."
              className="w-full h-32 border rounded-lg  p-2  outline-none resize-none "/>

            <button onClick={() =>{
                About()
               setOpenAchievements(false)}} 
            className="mt-3 bg-blue-500 h-8 w-12  text-white mb-3 rounded-lg hover:bg-blue-600"> Save
            </button>

        </div>

           )}
           <hr/>

          <p className="text-xl font-serif mt-3">Skills</p> 
            <ul  className=" list-disc  gap-10 ml-7 ">
             {results?.skills?.map((skills,index)=> <li className=" font-serif text-lg marker:text-green-600 " key={index}>{skills}</li>)}
             </ul>
            <hr/>
          
        </div>
        <div className="w-3/12 border rounded-lg mr-2 mt-0 shadow-md self-start ">

        <p className="text-2xl font-bold text-center p-2">Resume</p>
        <img src={resumeimg} alt="Resume" className="rounded-lg"/>
            <button
             onClick={() => {
                  if (info?.resume) {
                     window.open(`http://localhost:3000/uploads/${info.resume}`,"_blank")}
                    }}
                className="border-2 border-blue-500 w-44 text-lg text-blue-600 px-4 py-2 rounded-lg ml-7">  View Resume</button>
        <p className="text-2xl font-bold text-center p-2 mt-1">Your Score</p>
    <div className="relative flex items-center justify-center h-56 w-56 pl-2 pt-5">

    <svg className="absolute" width="220" height="220">
      
      <circle
        cx="110"
        cy="110"
        r="90"
        stroke="#e5e7eb"
        strokeWidth="20"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r="90"
        stroke="#14b8a6"
        strokeWidth="20"
        fill="none"
        strokeLinecap=""
        strokeDasharray={2 * Math.PI * 90}
        strokeDashoffset={
          2 * Math.PI * 90 * (1 - (results?.score || 0) / 100)
        }
        transform="rotate(-90 110 110)"
        style={{ transition: "0.5s ease" }}
      />
    </svg>

    <div className="text-center">
      <p className="text-6xl font-bold">{results?.score}</p>
      <p className="text-xl">/100</p>
    </div>
 
     </div>
      <div className="flex gap-3 justify-center m-5 text-xl text-red-700 hover:cursor-pointer"  onClick={logout}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
        <p>Logout</p>
      </div>

       </div>
      
       </div>
       </div>
       
    
    </div>
  );
}

export default Profile;

