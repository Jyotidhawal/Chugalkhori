import GenderCheckBox from "./genderCheckbox";

const Signup=()=>{
   return  <div className="flex flex-col items-center justify-center min-w-96 max-auto">
         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
          backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-blue-500"> 
            Sign Up <span className="text-blue-500"> Chugalkhori</span>
            </h1>

          
                   
                   <form >

                   <div>
                    <label className="label p-2 " >
                        <span className="text-base  label-text">Full Name</span>
                    </label>
                    <input type="text " placeholder=" Ninama Prince " className="w-full 
                    input input-bordered h-10" />
                </div>

                <div>
                    <label className="label p-2 " >
                        <span className="text-base  label-text">Username</span>
                    </label>
                    <input type="text " placeholder=" Shinchan " className="w-full 
                    input input-bordered h-10" />
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base   label-text">Password</span>
                    <input type="Password " placeholder=" Enter Password "
                     className="w-full mt-1  input input-bordered h-10" />
                    </label>
                </div>

                <div >
                    <label className=" label p-2 block">
                    <span className="text-base   label-text"> ConfirmPassword</span>
                    <input type="Password " placeholder=" Confirm Password "
                     className="w-full mt-1  input input-bordered h-10" />
                    </label>
                </div>
           {/* Gender check box */}
           <GenderCheckBox/>
                <a className="text-sm hover:ubderline hover:text-blue-600 mt-4 inline-block" href='#'>
                    Already have an account
                </a>

                <div>
                    <button className="btn btn-block btn-sm mt-2 border border-slate-700"> Sign UP </button>
                </div>

               

            </form>    


          </div>
   </div>
}

export default Signup;