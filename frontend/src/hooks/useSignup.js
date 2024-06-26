import { useState } from "react"
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useSignup = () => {
   const[loading,setLoading]=useState(false);
   const{setAuthUser}=useAuthContext();

    const signup=async({fullname,username,password,confirmPassword , gender})=>{
      const success=handleInputErrors({fullname,username,password,confirmPassword,gender})
      console.log("api call of signup")
       if(!success) 
       return;
    
       

    setLoading(true);
    try {
      const res=await axios.post('http://localhost/4000/api/auth/signup', {fullname,username,password,confirmPassword , gender},{
        
        withCredentials:true
      });

      const data=await res.data
      if(data.error){
        throw new Error(data.error);
      }
      // console.log(data);


      //localStorage
      localStorage.setItem("chat-ser",JSON.stringify(data));

      //CONTEXT
      setAuthUser(data)
      
    } catch (error) {
      toast.error(error.message);
      
    } finally {
      setLoading(false);
    }
    
  }
  return {loading,signup}
}

export default useSignup

function handleInputErrors({fullname,username,password,confirmPassword , gender}){
  if(!fullname || !username || !password || !confirmPassword || !gender){
    toast.error("Please fill in all the fields")
    return false;
  }

  if(password!==confirmPassword){
    toast.error("Passwords do not match")
    return false; 
  }

  if(password.length<6){
    toast.error("Password must be at least 6 characters long")
    return false;
  }

  return true;
}
