import {React,useEffect,useState }from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import './App.css'
import  Navbar  from "./components/Navbar"
import  Home  from './components/Home'
import  Features  from "./components/Features"
import  Howitworks  from './components/Howitworks'
import  Results  from './components/Results'
import  Aboutus  from './components/Aboutus'
import Signup from './components/Signup'
import Login from './components/Login'
import Resume from "./components/resume";
import Score from './components/score'
import ResumeAnalysis from './frames/resumeAnalysis'
import Skills from './frames/skills'
import Jobmatch from './frames/jobmatches'
import Overview from './frames/Overview'
import Profile from './frames/profile'
import ErrorBoundary from './Error'

function App() {

   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpw: "",
  });
  const [file, setfile]=useState(null);
  const [description,setdescription]=useState('');
  const [results,setresults]=useState(null);
  const [info ,setinfo]=useState(null)
   
  useEffect(() => {
      const fetchProfile = async () => {
        try {
          const email = localStorage.getItem("email");

          if(email){
          const res = await fetch("http://localhost:3000/refreshdata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
    
          const data = await res.json();
          
    
          setinfo(data);
          setresults(data.results)
        }
        } catch (err) {
          console.error(err);
        }
      };
    
      fetchProfile();
    }, []);


  
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
  return (
    <>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>

     <Navbar info={info} results={results} />

    
  

      <Routes>
       
        <Route
          path="/"
          element={
            <>
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
            </>
            }
        />
        
        
        <Route path="/signup" element={<Signup formData={formData} setFormData={setFormData} />} />
        <Route path="/login" element={<Login  />} />
        <Route path='/resume' element={<Resume file={file} setfile={setfile} description={description} setdescription={setdescription}  results={results} setresults={setresults} info={info} setinfo={setinfo} formData={formData}/>}/>
        <Route path='/score' element={<Score file={file} description={description} results={results} />}>
             <Route index element={<Overview results={results} info={info}/>}/>
            <Route path="overview" element={<Overview results={results} setresults={setresults} info={info} setinfo={setinfo}/>} />
            <Route path="resumeanalysis" element={<ResumeAnalysis results={results} />} />
            <Route path="skills" element={<Skills results={results} />} />
            <Route path="jobmatches" element={<Jobmatch results={results}/>} />
            <Route path="profile" element={<Profile file={file} setfile={setfile} results={results} setresults={setresults} info={info} setinfo={setinfo} formData={formData} setFormData={setFormData} />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App;