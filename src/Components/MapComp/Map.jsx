
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const MapComponent = () => {
    const [mapError, setMapError] = useState(null);
    const [showMarker, setShowMarker] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMarker(true);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    const mapContainerStyle = {
        width: '300px',
        height: '250px',
        cursor: 'pointer' // Add cursor pointer to indicate clickability
    };

    const center = {
        lat: 30.2935509,
        lng: -81.609976,
    };

    const markerPosition = {
        lat: 30.2935509,
        lng: -81.609976,
    };

    const handleMapClick = () => {
        // Create Google Maps URL with the location
        const googleMapsUrl = `https://www.google.com/maps/place/College+Tax+%26+Retirement/@30.2935634,-81.6100739,55m/data=!3m1!1e3!4m12!1m5!3m4!2zMzDCsDE3JzM2LjgiTiA4McKwMzYnMzUuOSJX!8m2!3d30.2935509!4d-81.609976!3m5!1s0x88e5b67a0ecd23bb:0xc31a069b187a94af!8m2!3d30.2935509!4d-81.609976!16s%2Fg%2F1tcz93zz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;
        // Open in new tab
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <LoadScript 
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_API}
            onError={(error) => setMapError(error)}
        >
            {mapError ? (
                <div>Error loading map: {mapError.message}</div>
            ) : (
                <div onClick={handleMapClick} role="button" tabIndex={0}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={17}
                        mapTypeId='hybrid'
                        onLoad={() => console.log('Map loaded successfully')}
                    >
                        {showMarker && <Marker 
                            position={markerPosition}
                            icon={{
                                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                            }}
                            onLoad={() => console.log('Marker loaded successfully')}
                        />}
                    </GoogleMap>
                </div>
            )}
        </LoadScript>
    );
};

export default MapComponent;
