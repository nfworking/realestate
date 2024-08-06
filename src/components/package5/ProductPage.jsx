import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";
import CountUp from "react-countup";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2014/02/the-lotus-gold-coast-holiday-rentals.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2014/02/the-lotus-outdoor-dining.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2014/02/the-lotus-expansive-outdoor-living.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2014/02/The-Lotus-Master.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    const [gotourl] = "localhost:5173";


    return (
            
       
                    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full ml-5  aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24 ml-5'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='mt-10 flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-blue-600 font-semibold'>The Lotus</span>
                    <h1 className='text-3xl font-bold mt-50'>6 bedrooms · 3.5 bathrooms</h1>
                </div>
                <p className='text-white-700'>
                This waterfront home is designed to bring the outdoors indoors creating the best of holiday accommodation on the Gold Coast. The relaxing ambience is suited especially for entertaining by the pool with dedicated areas that allow you to relax & unwind with a fine wine and great company.

This delightful property is state of tranquility. Once you enter you will simply revel in the lifestyle atmosphere that this residence provides. 

With 6 bedrooms, 3 bathrooms, a powder room and large entertaining areas this residence is guaranteed to accommodate up to 14 people with ease.

The large open plan living and entertaining areas are situated overlooking the beautiful pool.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={7500000} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>


                <div className="ml-20 mt-0 mb-10">
                    <h1 className="mb-4 font-semibold  w-15 px-20  ">Where the house is located!</h1>
                <MapContainer
        center={[-28.03114, 153.425645]}
        zoom={9}
        scrollWheelZoom={true}
        style={{
            height: "35vh",
            width: "80%",
            
                 
            zIndex: 0,           
            borderRadius: "2%",
            
        }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           <GeoCoderMarker address={'${address} ${city} ${country}'} />
           
        </MapContainer>
                </div>

            </div>
        </div>
    )
}

export default ProductPage