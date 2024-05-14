import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useLogin = () => {
 const [loading, setLoading]=useState(false)
 const { setAuthUser }=useAuthContext();

 const login=async({username,password})=>{
    setLoading(true);
    try {
        const res =await axios.post("http://localhost/4000/api/auth/login",{
         withCredentials: true,
        });
        const data=await res.data;
        if(data.error){
           throw new Error(data.error);
        }
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data);
       
    } catch (error) {
       toast.error(error.message);
 }
 finally{
     setLoading(false);
 }
}

return {loading,login}
}

export default useLogin
