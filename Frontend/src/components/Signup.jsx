import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Eye,EyeClosed} from 'lucide-react'
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"

function Signup({ formData, setFormData }) {
 
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showpassword,setshowpassword]=useState(false)
  const [showcnfpw,setshowcnfpw]=useState(false)

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);
       setFormData({
        ...formData,
         username: result.user.displayName,
         email: result.user.email,
       });
       const res=await fetch("http://localhost:3000/api/auth/google-login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
          },
         body: JSON.stringify({
            username: result.user.displayName,
             email: result.user.email,
             googleId: result.user.uid,
  }),
});
   const data= await res.json();
   console.log(data);
     alert(`Welcome ${result.user.displayName}`);

    } catch (error) {
      console.log(error);
    }


    await navigate('/resume')
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (formData.password !== formData.confirmpw) {
      setError("Passwords do not match");
      return; 
    }

    try {
      const res = await fetch("http://localhost:3000/create", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();
      console.log(data);

     
      navigate('/login');

    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong");
    }
  };

  return (

    <div className='flex justify-center h-screen '>

    <div className='border shadow-lg rounded-lg p-5 m-3 h-fit bg-blue-100'>
      <h1 className='text-3xl text-center font-bold'>Create your account</h1>

    
      {error && <p className='text-red-600 text-center'>{error}</p>}
 


      <div className='mt-4 m-10'>
        <div>

      <button onClick={handleGoogleLogin} type="button" className='border flex gap-3 align-center p-1 bg-green-300 h-9 w-56 rounded-lg  m-6 hover:scale-110 transition duration-700 ease-in-out cursor-pointer'> 
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
         className="w-5"
        />
        Continue with Google
      </button>
    </div>
      
      <div className='flex gap-2 mb-4'><span><hr className='border-1 border-gray-400 w-32 mt-4'/></span><p className='text-xl mt-0'>OR</p><span><hr className='border-1 border-gray-400 w-32 mt-4'/></span></div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>

          <span>
            <p className='font-semibold'>Name</p>
            <input
              type="text"
              name="username"   
              value={formData.username}
              onChange={handleChange}
              className='border border-black h-9 w-54 rounded-md'
            />
          </span>

          <span>
            <p className='font-semibold'>Email</p>
            <input
              type="email"
              name="email"   
              value={formData.email}
              onChange={handleChange}
              className='border border-black h-9 w-64 rounded-md'
            />
          </span>

          <span>
            <p className='font-semibold'>Password</p>
          <div className='relative'>
            <input
              type={showpassword ? "text":"password"}
              name="password"   
              value={formData.password}
              onChange={handleChange}
              className='border border-black h-9 rounded-md'
            />
             <button type="button" onClick={() => setshowpassword(!showpassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ">
              {showpassword ? <Eye size={20} /> : <EyeClosed size={20} />}
              </button>
              </div>
          </span>

          <span className='m-1'>
            <p className='font-semibold '>Confirm Password</p>
          <div className='relative'>
            <input
              type={showcnfpw?"text":"password"}
              name="confirmpw"  
              value={formData.confirmpw}
              onChange={handleChange}
              className='border border-black h-9 rounded-md'
            />
             <button type="button" onClick={() => setshowcnfpw(!showcnfpw)}
               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ">
                {showcnfpw ? <Eye size={20} /> : <EyeClosed size={20} />}
               </button>
               </div>
          </span>
           <p>Already have an account ? <Link to='/login' className='text-red-700 underline'>Log in</Link>  </p>
          <button
            type="submit"
            className='bg-blue-500 text-white text-xl font-semibold rounded-md h-10 w-32 hover:scale-125 transition duration-700 ease-in-out cursor-pointer'
          >
            Create 
          </button>

        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;