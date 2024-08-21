import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Why from './Components/Why';
import Footer from './Components/Footer';
import Welcome from './Components/Welcome';
import Yogaschool from './Components/Yogaschool';
import Home from './Components/Home';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Whatsapp from './Components/Whatsapp';
import Cont from './Components/Cont';
import Services from './Components/Services';
import ScrollToTop from './Components/ScrollToTop';
import ScrollTop from './Components/ScrollTop';


function App() {
  return (
    <>
  

   {/* <Home/> */}

 
  
   <BrowserRouter>
  <ScrollToTop/>
   <Navbar/>
  
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Cont/>} />
    <Route path='/services' element={<Services/>}/>
   </Routes>
   <Whatsapp/>
   <ScrollTop/>
   <Footer/>

   </BrowserRouter>
  
   </>
  );
}

export default App;
