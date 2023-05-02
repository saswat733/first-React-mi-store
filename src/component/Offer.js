import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import "../styles/offer.css"
const Offer = () => {
  return (
    <div className='offer'>
      <div>
        <a href="https://in.event.mi.com/in/offer-with-mi"><img
          className="d-block w-100"
          src="https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230"
          alt="First slide" 
        /></a>
        
        </div>
        <div>
        <a href="https://in.event.mi.com/in/work-from-home-essentials"><img
          className="d-block w-100"
          src="https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230"
          alt="Second slide"
        /></a>
        </div>
        <div>
      
        <a href="https://xiaomi.giveindia.org/"><img
          className="d-block w-100"
          src="https://i02.appmifile.com/761_operator_in/27/04/2021/09489d6a77f96111372718a551d2799d.png?width=398&height=230"
          alt="Third slide"
        /></a>
        </div>
    
    </div>
  )
}

export default Offer
