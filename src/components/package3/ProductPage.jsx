import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";;
import CountUp from "react-countup";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2017/03/011_Open2view_ID779234-16_Sunset_Boulevard__Surfers_Paradise-1024x684.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2017/03/main-river-magic-outdoor-patio-looking-over-water-waterfront-holiday-homes-gold-coast.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2017/03/017_Open2view_ID779234-16_Sunset_Boulevard__Surfers_Paradise-1024x684.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2017/03/Main-River-Magic-Family-Holiday-Home-Dining-Views.jpg"
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
                    <span className=' text-blue-600 font-semibold'>Main River Magic!</span>
                    <h1 className='text-3xl font-bold mt-50'>7 bedrooms · 5 bathrooms</h1>
                </div>
                <p className='text-white-700'>
                A multi level home with commanding wide water views over main river and lots of living space this haven of design, taste and tranquility will have you thinking that you never want the holiday to end!

With seven spacious bedrooms and five bathrooms the floor plan is ideal to give everyone space and privacy. There are four distinctly separate living and entertaining areas making this an ideal home for holidays or corporate retreats.

The beautiful open plan living, dining and kitchen area overlooks the pool and waterfront and steps down to a protected patio deck with expansive views of the Nerang River and hinterland.

The views of the Surfers Paradise skyline by night will enchant you while the modern decor and tasteful polished timber floors add that touch of elegance with a relaxed feeling.  The home is fully air-conditioned for your comfort.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={4005400} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>


                <div className="ml-20 mt-0 mb-10">
                    <h1 className="mb-4 font-semibold  w-15 px-20  ">Where the house is located!</h1>
                <MapContainer
        center={[-28.0057551, 153.4208804]}
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