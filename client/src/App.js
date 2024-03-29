import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/app/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Write from './pages/write/Write';
import Search from './pages/search/Search';
import SinglePost from './pages/single/SinglePost';
import { useDispatch, useSelector } from 'react-redux';
import AccessDenied from './pages/accessDenied/AccessDenied';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { loginUser, logoutUser } from './redux/services/Constants';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state)=>state.constant.loggedIn);

  useEffect(()=>{
    const token = Cookies.get('token');
    if(token){
      dispatch(loginUser());
    }else{
      dispatch(logoutUser());
    }
  })

  return (
    <div className="App">
       <BrowserRouter>
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/register' element={<Signup/>}/>
              <Route path='/new-post' element={loggedIn ? <Write/> : <AccessDenied/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/:id' element={<SinglePost/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;