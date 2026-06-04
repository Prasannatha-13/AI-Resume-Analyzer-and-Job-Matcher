const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/projectdb")

const userschema= new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required:false
  },
  googleId: {
  type: String,
},
  resume:{
   type:String,
   default:""
  },
  profilePic:{
    type:String,
    default:""
  },
  description:{
    type:String,
    default:""
  },
  results:{
    type:Object,
     default:{}
  },
  about:{
    type:String,
   default:""
  },
  education:{
    type:String,
    default:""
  },
  work:{
    type:String,
     default:""
  },
  achievements:{
    type:String,
     default:""
  },
  profilePic:{
    type:String,
     default:""
  }
})
module.exports=mongoose.model("User",userschema)