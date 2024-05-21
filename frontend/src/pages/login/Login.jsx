import { useState } from 'react';
import {Link} from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login =()=>{
       
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const {login} = useLogin();
    const data = (
        {
            username: username,
            password: password
        }
    )
    const handleSubmit= async (e) => {
        e.preventDefault();
        await login(data)
    }

    return <div className="flex flex-col items-center justify-center min-w-96mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300 "> login
            <span className="text-blue-500"> Chugalkhori</span>
            </h1>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2 " >
                        <span className="text-base text-white label-text">Username</span>
                    </label>
                    <input type="text " placeholder=" Enter Username " className="w-full 
                    input input-bordered h-10"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base  text-white label-text">Password</span>
                    <input type="password" placeholder=" Enter Password "
                     className="w-full mt-1  input input-bordered h-10" 
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                    </label>
                </div>

                <Link to="/signup" className="txt-sm   mt-2 inline-block hover:underline text-blue-600 ">
                    {"Don't"} have an account?
                </Link>

                {/* <div>
                    <button className="btn btn-block btn-sm mt-2"
                    disabled={loading}
                    > { loading ? <span className='loading loading-spinner'></span>: "Login"} </button>
                </div> */}
                <button className=' btn btn-block btn-sm mt-4'>
                    Submit
                </button>
            </form>
            </div> 



    </div>;
};
export default Login;