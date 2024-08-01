import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";
import CountUp from "react-countup";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2018/02/Haven-On-Holland-Broadbeach-Waters-Luxury-Family-Holiday-Home-Ultimate-Luxury-1.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2018/02/Haven-On-Holland-Broadbeach-Waters-Luxury-Family-Holiday-Home-Deisgner-Kitchen.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2018/02/Haven-On-Holland-Broadbeach-Waters-Luxury-Family-Holiday-Home-Giant-Chess.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2018/02/Haven-On-Holland-Broadbeach-Waters-Luxury-Family-Holiday-Home-Canal-Tropical-Garden.jpg"
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
                    <span className=' text-blue-600 font-semibold'>Haven On Holland</span>
                    <h1 className='text-3xl font-bold mt-50'>7 bedrooms · 5 bathrooms</h1>
                </div>
                <p className='text-gray-700'>
                This stunning home has been designed with supreme luxury in mind with a myriad of options for guests. The home is ideally situated in a sought after position of Broadbeach Waters and has everything you need to relax for all your holiday needs with family, friends or perfect for business or corporate retreats. With 7 large bedrooms and 5 designer bathrooms, multiple indoor and outdoor spaces there is no end to the luxuriousness and options that this home has to offer.

The oversized poolside alfresco area has an inbuilt BBQ overlooking the crystal blue pool and deck, quiet waterfront and lush grass area.

This home optimises the concept of indoor/outdoor living. The stylish open plan kitchen with butlers pantry and wine room looking over the lounge and dining area is almost doubled when you open up the sliding stacked doors onto the undercover outdoor area with built in BBQ and lounges. All of this looks over the manicured lawn, pool area and deck and quiet waterfront.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={8500000} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>


                <div className="ml-20 mt-0 mb-10">
                    <h1 className="mb-4 font-semibold  w-15 px-20  ">Where the house is located!</h1>
                <MapContainer
        center={[-28.02762, 153.41599]}
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