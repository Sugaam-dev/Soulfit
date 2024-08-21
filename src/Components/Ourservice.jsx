import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/ourservics.css'
import { Link } from "react-router-dom";
function Ourservice() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
       
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    const data = [
        {
            image:"./images/300-yoga-ttc.webp",
          name: "Teachers Training Programs",
          description:
            "Welcome to Yogalayaa's Teachers Training Program! Are you passionate about yoga and eager to deepen your practice while gaining the skills and",
        },
        {
            image:"./images/300-yoga-ttc.webp",
             name: "Teachers Training Programs",
            description:"Welcome to Yogalayaa's Teachers Training Program! Are you passionate about yoga and eager to deepen your practice while gaining the skills and",
          },
          {
            image:"./images/300-yoga-ttc.webp",
            
            name: "Teachers Training Programs",
            description:
              "Welcome to Yogalayaa's Teachers Training Program! Are you passionate about yoga and eager to deepen your practice while gaining the skills and",
          },
          {
            image:"./images/300-yoga-ttc.webp",
            name: "Teachers Training Programs",
            description:
              "Welcome to Yogalayaa's Teachers Training Program! Are you passionate about yoga and eager to deepen your practice while gaining the skills and",
          }
      ];


  return(
    
    <>
  <div className="service">

    <div className="serviceh">
        <h1>Our Services</h1>
        <img src="./images/lg.png" alt="logo" />
    </div>
    <div className="servicebox">
        <Slider {...settings}>
            {
                data.map((d)=>(

            
<div className="servicecarou">
    <div className="simage">
        <img src={d.image} alt="" />
    </div>
    <div className="ani">

    <div className="sname">
        <h3>{d.name}</h3>
    </div>
    <div className="sdescrip">
        <p>{d.description}</p>
    </div>
    <div className="sbut">
       <Link to='/Contact'> <button>book Now</button></Link>
    </div>
    </div>

</div>
    ))
}
        </Slider>
    </div>
  </div>
  
  </>
  );
}

export default Ourservice;
