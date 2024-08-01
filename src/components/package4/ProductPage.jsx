import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";
import CountUp from "react-countup";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2020/03/Coral_Sands_Luxury_Waterfront_relaxing_pool.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2020/03/Coral_Sands_Luxury_Waterfront_outdoor_dining.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2020/03/Coral_Sands_Luxury_Waterfront_back_pool.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2020/03/Coral_Sands_Luxury_Waterfront_master_balcony.jpg"
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
                    <span className=' text-blue-600 font-semibold'>Coral Sands</span>
                    <h1 className='text-3xl font-bold mt-50'>8 bedrooms · 5 bathrooms</h1>
                </div>
                <p className='text-gray-700'>
                Waterfront home showcasing a contemporary coastal design, with spacious, elegant interiors and high ceilings. Soaking up vast water views, natural sunlight and peaceful surroundings. Multiple entertainment spaces all set against a backdrop of the scenic Gold Coast skyline. This large 8 bedroom home has all that you need for an ideal family holiday!

Tranquil water views are enjoyed through the large glass sliding doors that span the open plan living and dining areas.  Sit back and relax in the light filled living area while watching your friends and family enjoy the pool.  By night appreciate the skyline lights of Broadbeach and Surfers Paradise as you unwind on holiday.

Perfectly positioned to access the very best of the central Gold Coast, Coral Sands is located in  Broadbeach Waters and is in close proximity to iconic dining and retail precinct, Broadbeach, as well as the beach, Star Casino, Gold Coast Convention and Exhibition Centre and Pacific Fair shopping centre.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={9000000} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>


                <div className="ml-20 mt-0 mb-10">
                    <h1 className="mb-4 font-semibold  w-15 px-20  ">Where the house is located!</h1>
                <MapContainer
        center={[-28.030884, 153.422302]}
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