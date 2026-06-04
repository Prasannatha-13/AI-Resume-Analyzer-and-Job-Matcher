<>
     <Navbar/>
     <section id="home">
        <Home />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="howitworks">
        <Howitworks />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="aboutus">
        <Aboutus />
      </section>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>} />
      </Routes>
     
   
     <nav className="flex items-center justify-between  px-6 ">
      <img src={logo} alt="image" className="h-28 "/> 
       
        <div className='flex items-center gap-11 '> 
            <ScrollLink to="home" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor pointer">Home</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={500}  offset={-70} className='text-xl font-serif hover:cursor-pointer'> Features</ScrollLink>
            <ScrollLink to="howitworks" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer">How It Works</ScrollLink>
            <ScrollLink to="results" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer ">Results</ScrollLink>
            <ScrollLink to="aboutus" smooth={true} duration={500}  offset={-70} className="text-xl font-serif hover:cursor-pointer">About Us</ScrollLink>
        </div>
        <div className="flex items-center gap-4">
        <button onClick={()=>{navigate('/signup')}} className=' bg-blue-500 px-5 border  rounded-lg text-2xl font-semibold text-white py-2 hover:scale-110 hover:bg-green-600  transition duration-700 ease-in-out cursor-pointer hover:ring-4  '>Sign Up</button>
        <button className='px-5 border border-blue-500 rounded-lg text-2xl font-semibold text-blue-500 py-2 hover:scale-110 hover:bg-green-600 hover:text-white transition duration-700 ease-in-out cursor-pointer hover:ring-4'>Login</button>
        </div>
      </nav>


      import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({formData,setFormData}){
   
    
    const navigate=useNavigate();

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    };


   
    function HandleSubmit(e){
          e.preventDefault();

        if(formData.password !== formData.confirmpw){
        //    <p className='text-red-600'>incorrect</p>
           console.log("incorrect")
        }
        else{
            navigate('/Login')
        }
        fetch("http://localhost:3000/create",{
             method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                username: formData.username,
                email: formData.email,
                password: formData.password
            })
            
        }) .then(res => {
        console.log("Response received");
        return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error("Error:", err));
    }

    return(
     <>
     <h1 className='text-3xl text-center font-bold'>Sign Up</h1>
     <div className='mt-4 m-10'>
     <form onSubmit={(e)=>{HandleSubmit(e)}} className='flex flex-col items-center gap-3 '>
        <span><p className=' font-medium'> Name</p><input type="text" value={formData.username} onChange={handleChange}  className='border border-gray-950 h-9 w-54 rounded-md'/></span>
       <span><p className='font-medium'>Email</p><input  type="email" value={formData.email} onChange={handleChange} className='border border-gray-950  h-9 w-64 rounded-md'/></span>
        <span><p className='font-medium'>Password</p> <input type="password" value={formData.password} onChange={handleChange}  className='border border-gray-950 h-9 rounded-md'/></span>
        <span><p className='font-medium'>Confirm Password</p><input  type="password" value={formData.confirmpw}  onChange={handleChange} className='border  border-gray-950  h-9 rounded-md'/></span>
         <button type="submit" className='border bg-blue-500 rounded-md text-2xl text-white font-semibold h-10 w-32 hover:scale-125 transition duration-700 ease-in-out'>Submit</button>
     </form>        
     </div>
     </>
    )
}
export default Signup
    </>
