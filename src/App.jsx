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
import Package1 from './Components/Package1';
import Package2 from './Components/Package2';
import Kumbh from './Components/Kumbh';


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
    <Route path='/package1' element={<Package1/>}/>
    <Route path='/package2' element={<Package2/>}/>
   </Routes>
   <Whatsapp/>
   <ScrollTop/>
   <Footer/>

   </BrowserRouter>
  
   </>
  );
}

export default App;
