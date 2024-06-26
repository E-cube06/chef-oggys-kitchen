import React from 'react'
import CustomImage from './CustomImage'

const HeroSection = () => {

    const images = [
        "All you can eat.jpeg",
        "Amala&Ewedu.jpeg",
        "Jollof Rice, plantain and sauce.jpeg",
        "munches.jpeg",
        "Ofada rice.jpeg",
        "Pounded yam and vegetables.jpeg",
        "Vegetable porridge.jpeg",
        "Plantain&Sauce.jpeg",
        "Appetizers.jpeg",
        
    ]
  return (
    <div className='section hero'>
        <div className="col typography">
            <h1 className="title">What Are We About</h1>
            <p className="info">Oggy's Kitchen is a place where you can please your soul and tummy with delicious Nigerian food recipes of all delicacies and our services are absolutely flawless. What are you waiting for!!! explore now</p>
            <button className="btn">Explore Now</button>
        </div>
        <div className="col gallery">
            {images.map((src, index) =>(
                <CustomImage key={index} imgSrc={`${import.meta.env.BASE_URL}images/${src}`} pt={"90%"}/>
            ))}
            
           
        </div>
    </div>
  )
}

export default HeroSection