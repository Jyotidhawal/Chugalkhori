import { Navigate,Routes,Route} from "react-router-dom"
import './App.css'
import './index.css'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/home';
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from "./context/AuthContext";


function App() {
  const{authUser}=useAuthContext();
  
  console.log( " its authuser" , authUser);
  

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     

      {/* <Routes> */}
        {/* <Route path='/' element={ <Home/>  }/> */}
        {/* <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/> */}

      

     

   <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
        {/* <Route path='/' element={<Home/>} /> */}


				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        {/* <Route path='/login' element ={<Login/>}/> */}


				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
			{/* <Route path='/signup' element={<Signup/>}/> */}
      </Routes>
      <Toaster/>
      
  
      
    </div>
  )
}

export default App;
