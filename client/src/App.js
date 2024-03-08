import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/app/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Write from './pages/write/Write';
import Search from './pages/search/Search';
import SinglePost from './pages/single/SinglePost';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Signup/>}/>
              <Route path='/new-post' element={<Write/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/:id' element={<SinglePost/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;