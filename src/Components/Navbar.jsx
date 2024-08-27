import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHouse,faXmark} from '@fortawesome/free-solid-svg-icons'

import {NavLink} from "react-router-dom"


const Navbar = () => {



    function openmenu(){
        let sidemenu=document.getElementById("sidemenu");
        
        sidemenu.style.right='0px'
    }
    const closemenu =()=>{
        let sidemenu=document.getElementById("sidemenu");
 
 sidemenu.style.right='-200px'
 
     }
    return ( 
        <>
     
        <div className="navbar">
            <nav>
                <img src="./images/Soulfit_logo.png" alt="" className="logo" />
        {/* <span>SOULFIT</span> */}
            <ul id='sidemenu'>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/services"}>Services</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
         
                <FontAwesomeIcon icon={faXmark} className='menue'  onClick={closemenu}/>
            </ul>
            <FontAwesomeIcon icon={faBars} className='menue'onClick={openmenu}/>
    
            </nav>
         
        </div>
        

        {/* <div className="dem">
            
        </div> */}

        {/* <div className="jj">

        </div> */}
        </> 
 
    );
}
 
export default Navbar;