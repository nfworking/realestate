import { convertNeSwToNwSe } from 'google-map-react';
import React, { useState } from 'react';
import Maps from "../maps/maps";

import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/Mexicali-1-1024x686.jpg",
        img2 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/006_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg",
        img3 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/005_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg",
        img4 : "https://www.eliteholidayhomes.com.au/wp-content/uploads/2022/03/007_Open2view_ID784672-4_Mexicali_Court-1024x684.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);

    const [gotourl] = "localhost:5173";


    return (
            
       
                    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full ml-10  aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24 ml-10'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-blue-600 font-semibold'>Casa Mexicali</span>
                    <h1 className='text-3xl font-bold mt-50'>5 bedrooms · 3 bathrooms · Heated Pool</h1>
                </div>
                <p className='text-gray-700'>
                A perfect family holiday home with a heated pool. Casa Mexicali is the ideal property for a family holiday, complete with 5 bedrooms, 3 bathrooms and a great games room with pool table and a seperate lounge area both opening to the outdoor area with a BBQ and access to the heated pool.<br />  <br />

The kitchen, dining and entertainment room open all into one which makes this the perfect space for you to be in the thick of things while on holiday. You can be preparing a family meal in the kitchen while watching the kids have a game of pool or just a short stroll down the hallway you will be in the separate lounge/TV Area. <br /> <br />

The lounge and TV room have views to the outdoor heated pool and waterfront, these spaces merge together with the BBQ area and undercover outdoor lounge and dining. You can also access the outdoor area from the Pool Table and Games room.
                </p>
                <div className="ml-20">
                <MapContainer
        center={[53.35, 18.8]}
        zoom={1}
        scrollWheelZoom={true}
        style={{
            height: "50vh",
            width: "75%",
            
                 
            zIndex: 0,           
            borderRadius: "2%",
            
        }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           <GeoCoderMarker address={'${address} ${city} ${country}'} />
           
        </MapContainer>
                </div>
                <h6 className=' text-2xl font-semibold'>$ 2.500000.00</h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' mb-20 bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/'>
                    <button  className=' mb-20 bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Home</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProductPage