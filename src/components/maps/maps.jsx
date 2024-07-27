import React from "react";
import {MapContainer, TileLayer,} from 'react-leaflet';
import GeoCoderMarker from "../GeoCodeMarker/GeoCodeMarker";



const Housemap = ({address, city, country}) => {
    return (
        <MapContainer
        center={[53.35, 18.8]}
        zoom={1}
        scrollWheelZoom={true}
        style={{
            height: "80vh",
            width: "75%",
            marginTop: "20px",
            zIndex: 0,
            marginLeft: "170px",
            borderRadius: "2%",
            
        }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           <GeoCoderMarker address={'${address} ${city} ${country}'} />
           
        </MapContainer>
    );
};

export default Housemap












