import "../Styles/ayurveda.css";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';
import { Link } from "react-router-dom";



const Ayurveda = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <>
      <div className="ayurveda">
        <div className="ayurved">
            {/* <img src="./images/ayurvedaBack.jpg" alt="" /> */}
          <div className="ayurvedimg" data-aos="fade-right">
            <img src="./images/ayurvedaimage.jpg" alt="img" />
          </div>
          <div className="ayurvedcontent"data-aos="fade-up">
            <h2>Welcome to Soulfit</h2>
            <h1>Discover the Power of Ayurveda with Our Trusted Experts</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
              rem dolorem illo quisquam adipisci repellendus dolore asperiores
              maiores, doloribus, ea perspiciatis iusto! Quis libero tempora
              expedita, placeat consectetur dolor alias provident. Explicabo
              voluptas aliquid hic molestiae cumque similique sunt quam neque
              incidunt cum officia assumenda atque, ab id repellat soluta! Vel
              illum laboriosam voluptates. Laborum, incidunt explicabo. Culpa,
              veniam pariatur odio obcaecati harum laudantium ab architecto quas
              error totam blanditiis repellat ratione odit ducimus asperiores
              voluptas tenetur voluptate consequatur deleniti beatae molestias
              numquam dolores animi. Dicta provident asperiores quo non, ipsa
              officia dolor quis reprehenderit eius, fuga autem architecto
              earum?
            </p>
            <Link to='/contact'> <button>make apointment</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
