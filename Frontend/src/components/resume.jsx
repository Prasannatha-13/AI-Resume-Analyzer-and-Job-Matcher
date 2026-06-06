import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Resume({file,setfile,description,setdescription,results,setresults,info,setinfo,formData}){

    const navigate=useNavigate();
    const[msg,setmsg]=useState('')

    const email=localStorage.getItem("email") || formData.email;

    async function HandleSubmit(e){
            e.preventDefault();

            if(!file){
            setmsg("Please select a file");
             return;
            }
            if(!email) {
            setmsg("User not logged in");
            return;
            }

        const formdata = new FormData();
        formdata.append("resume", file);
        formdata.append("email",email);
        formdata.append('jobdescription',description)
        console.log("file uploaded")
        console.log(formdata)
    

        try{
           let res = await fetch('http://localhost:3000/upload',{
              method:"POST",
              body: formdata
            })

           const data=await res.json();

           if (res.ok) {
                navigate('/score');
            } else {
              setmsg(data.msg || "Upload failed");
            }
            setmsg(data.msg);

        } catch(err){
           console.error(err);
           setmsg("Error uploading file");
        }

        if(!file){
           console.log("file not selected")
             return;
            }
            if(!email) {
            console.log("User not logged in");
            return;
            }

        try{
            let res= await fetch('http://localhost:3000/analyze',{
                method:'POST',
                body:formdata
            });
            let data=await res.json();
            console.log(data.results)
            setinfo(data);
            setresults(data.results);
            
        }catch(err){
            console.error(err);
        }
   }
    return(
        <>
        <h1 className='text-3xl text-center font-bold mt-6'>Upload your Resume</h1>
        {msg && ( <p className="text-center mt-3 text-lg">{msg}</p>)}

        <div className='mt-4 m-10'>

        <form onSubmit={(e)=>HandleSubmit(e)} className='flex flex-col items-center gap-3 m-10'>

        <span><input type="file" accept=".pdf" onChange={(e)=>setfile(e.target.files[0])} className='border border-gray-950 h-9 w-54 rounded-md'/></span>
        <button type="submit" className='border bg-blue-500 rounded-md text-2xl text-white font-semibold h-10 w-32 hover:scale-125 transition duration-700 ease-in-out'>submit</button>
        <h1 className="text-lg mt-8">Job Description</h1>
        <textarea onChange={(e)=>setdescription(e.target.value)} className="border h-64 w-96 rounded-lg border-blue-600 bg-blue-400 bg-opacity-20"></textarea>
        </form>
        </div>
        </>
    )
}
export default Resume