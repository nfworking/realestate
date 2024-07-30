import React from "react";
import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "./GeoCodeMarker/GeoCodeMarker";



const Housemap = ({address, city, country}) => {
    return (
        <MapContainer
        center={[-28.0318444, 153.4129974]}
        zoom={8}
        scrollWheelZoom={true}
        style={{
            height: "20vh",
            width: "60%",
            marginRight: "100px",
            zIndex: 0,  
            backgroundColor: "black",         
            borderRadius: "2%",
            
        }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           <GeoCoderMarker address={'${address} ${city} ${country}'} />
           
        </MapContainer>
    );
};

export default Housemap












