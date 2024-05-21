import  { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

const useLogout = () => {
  const [loading,setLoading] =useState(false)
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true)
    try {
        const res=await axios.post('http://127.0.0.1:4000/api/auth/logout',{
            withCredentials: true,
           
            
        });

        const data = await res.data;
        if(data.error) {
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null)
        
        
    } catch (error) {
        toast.error(error.message)
        
    } finally {
        setLoading(false)
    }
};
    return {loading,logout};
}

export default useLogout
