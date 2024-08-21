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
const Home = () => {
    return ( 
        <>
        <Welcome/>
        <Yogaschool/>
        <Ayurveda/> 
      <Offering/>
   <Ourservice/>
      <Carousal/>
      <Utube/>


      {/* <Questions/> */}
      <Accordion/>
      <Ratings/>
      <Contact/>
        </>
     );
}
 
export default Home;