import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/app/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Footer from './components/app/footer/Footer';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Signup/>}/>
           </Routes>
           <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;