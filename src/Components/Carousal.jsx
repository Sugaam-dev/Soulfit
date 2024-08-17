import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../Styles/carousel.css'

function Carousal() {

    const data=[

{name:"200 Hour Online Yoga Teacher Training course By Soulfit",
    description:"The 200 hour online yoga teacher Training helps you complete the entire training directly from your home from experienced yoga teachers.",
    img:"https://templates.kohesifstudio.com/rahayu/wp-content/uploads/sites/28/2024/07/050-mortar.png",
    style:"Ashtanga, Vinyasa, Hatha, Yin",
    level:"Beginner to Intermediate",
    duration:"25 Days "
  },
{name:"300-Hour Yoga Teacher Training By Soulfit",
    description:"Become an advanced yoga teacher with our 300-hour Yoga Teacher Training course. Join the course and get certified by Yoga Alliance USA. ",
    style:"Ashtanga, Vinyasa, Hatha, Yin",
    level:"Intermediate to Advanced",
    duration:"29 Days "
},{name:"500 Hour Yoga Teacher Training By Soulfit",
   img:"./images/ayurvedaimage.jpg",
    description:"The 500-hour Yoga Teacher Training course combines all the modules of both 200 and 300-hour certification courses in one single program.",
    style:"Ashtanga, Vinyasa, Hatha, Yin",
    level:"Beginner to advanced",
    duration:"59 Days "
}
,{name:"ps",
   img:"https://livingyogaschool.com/images/300-yoga-ttc-multistyle.jpg",
    description:"lorem10 hskh jsdhkjn khdkhn, ,hskdns, ,dshkusy mdgjysgd ",
    style:"Ashtanga, Vinyasa, Hatha, Yin",
    level:"Beginner to Intermediate",
    duration:"25 Days "
}

    ]

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
  return (
<div className="boxx">
 <div className="heading"> <h1>Teachers Training Programs</h1>
 <img src="./images/lg.png" alt="" /></div>
    <div className="boxxx" >
        <Slider className='slid' {...settings}>
        {data.map((d)=>(
            <div className="cardcarusel">
              <div className="im">
                <img src={d.img} alt="" />
              </div>
<div className="name">
<h3>{d.name}</h3>
</div>
<div className="descr">
<p>{d.description}</p>
</div>
<div className="style">
  <span>Style</span>
  <p>{d.style}</p>
</div>
<div className="style">
  <span>Level</span>
  <p>{d.level}</p>
</div>
<div className="style">
  <span>Duration</span>
  <p>{d.duration}</p>
</div>

<div className="but">
<button>cource details</button>
</div>
            </div>
        ))}
        </Slider>
    </div>
</div>
  )
}

export default Carousal
