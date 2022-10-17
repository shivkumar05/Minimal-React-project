import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Forgot1 from './components/Forget1';
// import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Profile from './components/Profile';
import New_post from './components/New_post';
import About_social from './components/About_social';
import About_social2 from './components/About_social2';


function App()
{
  return (
  <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/About_social' element={<About_social/>}/>
        <Route path='/About_social2' element={<About_social2/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Forgot1' element={<Forgot1/>}/>
        {/* <Route path='/Navbar' element={<Navbar/>}/> */}
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/New_post' element={<New_post/>}/>
      </Routes>
    </BrowserRouter>
 </>
  );
}

export default App;