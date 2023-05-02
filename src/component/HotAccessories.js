import React from 'react'
import HotItemCard from '../component/HotItemCard.js'
import '../styles/HotAccessories.css'
const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyleCover,lifeStyle,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
        <div>
      <img src={musicCover || smartDeviceCover || homeCover || mobileAccessoriesCover||lifeStyleCover} alt="cover" />
        </div>

        {/* ......2nd */}
        <div>
            {music && music.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}

            {smartDevice && smartDevice.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            
            {home && home.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            {lifeStyle && lifeStyle.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}
            {mobileAccessories && mobileAccessories.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
            ))}

            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/5931818E-7D88-15F5-E907-50642788C9F4.jpg"/>

        </div>
    </div>
  )
}

export default HotAccessories
