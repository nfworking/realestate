import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";
import CountUp from "react-countup";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/11/web-01-1024x682.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/11/web-12-1024x683.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/11/028_Open2view_ID787193-31_Coobowie_Street-1024x684.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/11/021_Open2view_ID787193-31_Coobowie_Street-1024x684.jpg"
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
                    <span className=' text-blue-600 font-semibold'>Coobowie Waters</span>
                    <h1 className='text-3xl font-bold mt-50'>5 bedrooms · 4 bathrooms · Heated Spa</h1>
                </div>
                <p className='text-white-700'>
                A perfect family holiday home with water vistas that will take your breath away. This is the perfect 5 bedroom, 4 bathroom home for a family getaway, a corporate stay or just a relaxing getaway with friends.

The property boasts a large sun drenched pool and an outdoor heated spa with views to the large waterway it sits on.

The undercover outdoor deck at this property is one of a kind, with an outdoor dining table, outdoor lounge, BBQ and even a large bi-fold kitchen window that opens out with a servery bar – you can check in and do not need to leave during your stay.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={3200000} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>


                <div className="ml-20 mt-0 mb-10">
                    <h1 className="mb-4 font-semibold  w-15 px-20  ">Where the house is located!</h1>
<MapContainer
        center={[-28.0206097, 153.415578]}
        zoom={9}
        scrollWheelZoom={true}
        style={{
            height: "35vh",
            width: "80%",        
                 
            zIndex: 0,           
            borderRadius: "2%",
            backgroundColor: "black",
            
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