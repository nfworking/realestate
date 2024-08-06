
import React, { useState } from 'react';


import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";
import CountUp from "react-countup";

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
                    <span className=' text-blue-600 font-semibold'>Casa Mexicali</span>
                    <h1 className='text-3xl font-bold mt-50'>5 bedrooms · 3 bathrooms · Heated Pool</h1>
                </div>
                <p className='text-white-700'>
                A perfect family holiday home with a heated pool. Casa Mexicali is the ideal property for a family holiday, complete with 5 bedrooms, 3 bathrooms and a great games room with pool table and a seperate lounge area both opening to the outdoor area with a BBQ and access to the heated pool.

The kitchen, dining and entertainment room open all into one which makes this the perfect space for you to be in the thick of things while on holiday. You can be preparing a family meal in the kitchen while watching the kids have a game of pool or just a short stroll down the hallway you will be in the separate lounge/TV Area.

The lounge and TV room have views to the outdoor heated pool and waterfront, these spaces merge together with the BBQ area and undercover outdoor lounge and dining. You can also access the outdoor area from the Pool Table and Games room.

There is a private courtyard at the front of the house which is fully fenced.
                </p>
                
                <h6 className=' text-2xl font-semibold'><span>$</span> <CountUp start={0} end={2500000.00} duration={4} /></h6>
                <div className='flex flex-row items-center gap-12'>
                    
                    <button className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Enquire Now!!</button>
                    <a href='/houselist/'>
                    <button  className=' bg-blue-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Back to Houses</button>
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