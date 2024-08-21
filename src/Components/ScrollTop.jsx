import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../Styles/scrolltop.css'
function ScrollTop() {

    const scrol=()=>{
        window.scrollTo({top: 0,left: 0, behavior: "smooth"});
    }

  return (
    <>
      <div className="scrollbut" onClick={scrol}>
<FaArrowAltCircleUp  className='si'/>
      </div>
    </>
  )
}

export default ScrollTop
