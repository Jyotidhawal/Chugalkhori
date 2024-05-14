import GenderCheckBox from "./genderCheckbox";

import {Link } from "react-router-dom"
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup=()=>{
   const[inputs,setInputs] = useState({
    fullname: "",
    username:"",
    password:"",
    confirmPassword: "",
    gender:""
   })

   const{loading,signup}=useSignup()

   const handleCheckBox=(gender)=>{
    setInputs({...inputs,gender})
   }

   const handleSubmit= async (e) => {
    e.preventDefault();
    // console.log(data);
    
    await signup(inputs)


   }

   return (
     <div className="flex flex-col items-center justify-center min-w-96 max-auto">
         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
          backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-blue-500"> 
            Sign Up <span className="text-blue-500"> Chugalkhori</span>
            </h1>



          
                   
                <form onSubmit={handleSubmit} >

                   <div>
                    <label className="label p-2 " >
                        <span className="text-base  label-text">Full Name</span>
                    </label>
                    <input type="text " placeholder=" Ninama Prince " className="w-full input input-bordered h-10"
                    value={inputs.fullname}
                    onChange={(e)=>setInputs({ ...inputs,fullname: e.target.value})} />
                </div>

                <div>
                    <label className="label p-2 " >
                        <span className="text-base  label-text">Username</span>
                    </label>
                    <input type="text " placeholder=" Shinchan " className="w-full 
                    input input-bordered h-10"
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                    />
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base   label-text">Password</span>
                    <input type="Password" placeholder=" Enter Password "
                     className="w-full mt-1  input input-bordered h-10"
                     value={inputs.password}
                    onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                     />
                    </label>
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base   label-text"> ConfirmPassword</span>
                    <input type="Password" placeholder=" Confirm Password "
                     className="w-full mt-1  input input-bordered h-10"
                     value={inputs.confirmPassword}
                    onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                     />
                    </label>
                </div>
           {/* Gender check box */}
           <GenderCheckBox  onCheckboxChange={handleCheckBox} selectedGender={inputs.gender}/>
                <Link to={'/Login'} className="text-sm hover:ubderline hover:text-blue-600 mt-4 inline-block" href='#'>
                    Already have an account
                </Link>

                <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700"
                    disabled={loading}
                    > 
                    {loading ? <span className="loading loading-spinner"></span>  : "Sign Up"} </button>
                </div>

               

            </form>    


          </div>
   </div>)
}

export default Signup;