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
  console.log(authUser);
  

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login/> */}

      {/* <Signup/> */}
      {/* <Home/> */}

      {/* <h1> hellooo guyyzzz </h1> */}

      <Routes>
        <Route path='/' element={ <Home/>  }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/>
      
  
      
    </div>
  )
}

export default App;
