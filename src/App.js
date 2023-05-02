import './App.css';
import Navbar from './component/Navbar';
// import Prenavbar from './component/Prenavbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Slider from './component/Slider'
import Offer from './component/Offer';
import Heading from './component/Heading.js'
import Starproduct from './component/Starproducts.js'
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js'
import data from './data/data.json'
import HotAccessories from './component/HotAccessories.js'
import ProductReviews from './component/ProductReviews.js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import NavOptions from './component/NavOptions.js'
function App() {
  return (
    <Router>
    {/* <Prenavbar/> */}
    <Navbar/>
    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifestyle={data.fitnessAndLifeStyle} home={data.home} accessories={data.accessories} audio={data.audio}/>
    <Slider/>
    <Offer/>
    <Heading text="STAR PRODUCTS"/>
    <Starproduct/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
    <Routes>

      <Route exact path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>


      <Route exact path="/smartDevice"  element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} smartDeviceCover = {data.hotAccessoriesCover.smartDevice}/>}/>

      <Route exact path="/home"  element = {<HotAccessories home = {data.hotAccessories.home} homeCover = {data.hotAccessoriesCover.home}/>}/>

      <Route exact path="/lifeStyle"  element = {<HotAccessories lifeStyle = {data.hotAccessories.lifeStyle} lifeStyleCover = {data.hotAccessoriesCover.lifeStyle}/>}/>

      <Route exact path="/mobileAccessories"  element = {<HotAccessories mobileAccessories = {data.hotAccessories.mobileAccessories} mobileAccessoriesCover = {data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>

   </Router>
  );
}

export default App;
