import React, { useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"


let DefaultIcon = L.icon ({
    iconUrl : icon,
    shadowUrl : iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon


const GeoCoderMarker = ({address}) => {
    const map = useMap()
    const [position, setPosition] = useState([60, 19])
    const [position2, setPosition2] = useState([604, 139])
    return (
        <Marker position={position2} icon={DefaultIcon}>
            <Marker position={position} icon={DefaultIcon}>
            </Marker>
<Popup/>
        </Marker>

        
        
    );
};



export default GeoCoderMarker