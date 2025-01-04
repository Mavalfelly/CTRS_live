
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const MapComponent = () => {
    const [mapError, setMapError] = useState(null);
    const [showMarker, setShowMarker] = useState(false);

    useEffect(() => {
        // Small delay to ensure map is fully loaded
        const timer = setTimeout(() => {
          setShowMarker(true);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);
    const mapContainerStyle = {
        width: '300px',
        height: '300px',
    };

    const center = {
        lat: 30.2935509,
        lng: -81.609976,
    };

    const markerPosition = {
        lat: 30.2935509,
        lng: -81.609976,
    };

    return (
        <LoadScript 
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_API}
        onError={(error) => setMapError(error)}
        >
        {mapError ? (
            <div>Error loading map: {mapError.message}</div>
        ) : (
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={17}
            mapTypeId='hybrid'
            onLoad={() => console.log('Map loaded successfully')}
            >
           { showMarker && <Marker 
                position={markerPosition}
                icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }}
                onLoad={() => console.log('Marker loaded successfully')}
            />}
            </GoogleMap>
        )}
        </LoadScript>
    );
};

export default MapComponent;
