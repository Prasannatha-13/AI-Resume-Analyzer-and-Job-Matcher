import {React,useState}  from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Eye,EyeClosed} from "lucide-react"

function Login(){

          const [email,setemail]=useState('')
          const [password,setpassword]=useState('')
          const [error,seterror]=useState('')
          const [showpassword,setshowpassword]=useState(false)
          const navigate=useNavigate();
          localStorage.setItem("email", email);

    async function HandleSubmit(e){
              e.preventDefault();
       try{
            const res= await fetch('http://localhost:3000/login',{
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({
                    email:email,
                    password:password})
            })
              const data = await res.json();
              console.log(data);

            
           if (res.ok) {
                navigate('/resume');
            } else {
              seterror(data.message || "Login failed");
            }

        } catch (err) {
         console.error("Error:", err);
          seterror("Something went wrong");
        }
    }
    return(
      <div className="flex justify-center m-3 ">
       <div className="border rounded-lg shadow-lg p-5 bg-blue-500 bg-opacity-15">
       <h1 className='text-3xl text-center font-bold'>Login</h1>
       {error && <p className='text-red-600 text-center'>{error}</p>}
        <div className='mt-4 m-10'>
     <form onSubmit={(e)=>HandleSubmit(e)} className='flex flex-col items-center gap-3 '>
        <span><p className=' font-medium'> Email</p><input onChange={(e)=>setemail(e.target.value)} type="email" value={email} className='border border-gray-950 h-9 w-54 rounded-md'/></span>
        <span className="relative"><p className='font-medium'>Password</p> <input onChange={(e)=>setpassword(e.target.value)} type={showpassword ? "text":"password"} value={password} className='border border-gray-950 h-9 rounded-md'/>
             <button type="button" onClick={() => setshowpassword(!showpassword)}
                className="absolute right-3 top-1/2 -translate-y-2/2 text-gray-500 ">
               {showpassword ? <Eye size={20} /> : <EyeClosed size={20} />}
             </button>
        </span>
        <p>Didn't Signed Up ?    <Link to='/signup' className='text-red-700 underline'>Sign up</Link> </p>
         <button type="submit" className='border bg-blue-500 rounded-md text-2xl text-white font-semibold h-10 w-32 hover:scale-125 transition duration-700 ease-in-out'>Log in</button>
     </form>        
     </div>
       </div>
       </div>
    )
}
export default Login