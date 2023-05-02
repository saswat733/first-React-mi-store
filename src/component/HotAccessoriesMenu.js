import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesMenulink' to='/music'>Music Store</Link>
        <Link className='HotAccessoriesMenulink' to='/SmartDevice'>Smart Devices</Link>
        <Link className='HotAccessoriesMenulink' to='/Home'>Home</Link>
        <Link className='HotAccessoriesMenulink' to='/Lifestyle'>Lifestyle</Link>
        <Link className='HotAccessoriesMenulink' to='/MobileAccessories'>Mobile Accessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
