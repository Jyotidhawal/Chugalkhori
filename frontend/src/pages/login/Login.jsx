const Login =()=>{
    return <div className="flex flex-col items-center justify-center min-w-96mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
        backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300 "> login
            <span className="text-blue-500"> Chugalkhori</span>
            </h1>
            <form >
                <div>
                    <label className="label p-2 " >
                        <span className="text-base text-white label-text">Username</span>
                    </label>
                    <input type="text " placeholder=" Enter Username " className="w-full 
                    input input-bordered h-10" />
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base  text-white label-text">Password</span>
                    <input type="Password " placeholder=" Enter Password "
                     className="w-full mt-1  input input-bordered h-10" />
                    </label>
                </div>

                <a href="#" className="txt-sm text-black  mt-2 inline-block hover:underline text-blue-600 ">
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2"> Login </button>
                </div>

            </form>
            </div> 



    </div>;
};
export default Login;