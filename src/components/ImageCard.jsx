import { ImageListItem } from '@mui/material';
import VanillaTilt from "vanilla-tilt";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import '../styling/ImageCard.css'
import 'react-medium-image-zoom/dist/styles.css'

const ImageCard = (image, index) => {
    const tiltRef = useRef(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, )

    useEffect(() => {
        if (tiltRef.current && !isZoomed) {
            VanillaTilt.init(tiltRef.current, {
                max: 10,           
                speed: 400,        
                glare: true,       
                "max-glare": 0.5,  
            });
        }

        return () => {
            if (tiltRef.current?.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, [isZoomed]);
    
    return (
        <ControlledZoom
            isZoomed={isZoomed}
            onZoomChange={handleZoomChange}
        >
            <ImageListItem key={index}> 
                <img
                    srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${image}?w=248&fit=crop&auto=format`}
                    alt={image}
                    loading="lazy"
                    width="300"
                    ref={tiltRef}
                />
            </ImageListItem>
        </ControlledZoom>
    )
}

export default ImageCard;