import React,{useState,useEffect} from 'react'
import NavCard from '../component/NavCard.js'
import '../styles/Navoptions.css'
const NavOptions = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifestyle,home,accessories,audio}) => {

    const [miPhoneToggle, setmiPhoneToggle] = useState(false)
    const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false)
    const [tvToggle, settvToggle] = useState(false)
    const [laptopToggle, setlaptopToggle] = useState(false)
    const [audioToggle, setaudioToggle] = useState(false)
    const [fitnessAndLifestyleToggle, setfitnessAndLifestyleToggle] = useState(false)
    const [homeToggle, sethomeToggle] = useState(false)
    const [accessoriesToggle, setaccessoriesToggle] = useState(false)

    useEffect(() => {
      if(window.location.pathname==="/miphones"){
        return setmiPhoneToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/redmiphones"){
        return setredmiPhonesToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/tv"){
        return settvToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/laptops"){
        return setlaptopToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/lifestyle"){
        return setfitnessAndLifestyleToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/home"){
        return sethomeToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/radio"){
        return setaudioToggle(true)
      }
    
    }, [])
    useEffect(() => {
      if(window.location.pathname==="/accessories"){
        return setaccessoriesToggle(true)
      }
    
    }, [])
    


  return (
    <div class="navOptions">
      {miPhoneToggle? miPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {redmiPhonesToggle? redmiPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {tvToggle? tv.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {laptopToggle? laptop.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {fitnessAndLifestyleToggle? fitnessAndLifestyle.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {audioToggle? audio.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {homeToggle? home.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
      {accessoriesToggle? accessories.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.iamge}/> 
      )):null}
    </div>
  )
}

export default NavOptions
