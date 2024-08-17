import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faHouse,faXmark} from '@fortawesome/free-solid-svg-icons'

import {Link} from "react-router-dom"

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
                {/* <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1723282214~exp=1723285814~hmac=46732f48155268a1017a5726aa90baf70acec70f3ba384cb5a6920b166aba270&w=740" alt="" className="logo" /> */}
        <span>SOULFIT</span>
            <ul id='sidemenu'>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link>Services</Link></li>
                <li><Link to={"/Contact"}>Contact</Link></li>
         
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