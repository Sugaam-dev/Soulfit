import Ayurveda from "./Ayurveda";
import Welcome from "./Welcome";
import Yogaschool from "./Yogaschool";
import Offering from "./Offering";
import Carousal from "./Carousal";
import Contact from "./Contact";
import Utube from "./Utube";
import Ratings from "./Ratings";
import Questions from "./Questions";
import Accordion from "./Accordion";
import Ourservice from "./Ourservice";
import Package1 from "./Package1";
import Package2 from "./Package2";
import Kumbh from "./Kumbh";
import KumbhAcomodation from "./kumbhAcomodation";
import AyurvedCarousel from "./AyurvedCarousel";

const Home = () => {
    return ( 
        <>
        <Welcome/>
        {/* <Package1/>
        <Package2/> */}
        <Yogaschool/>
        <Ayurveda/> 
        {/* <AyurvedCarousel/> */}
      <Offering/>
   <Ourservice/>
   <Kumbh/>
      <Carousal/>
      <KumbhAcomodation/>
      <Utube/>


      {/* <Questions/> */}
      <Accordion/>
      <Ratings/>
      <Contact/>
        </>
     );
}
 
export default Home;