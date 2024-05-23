import React from "react";
import { GoogleMap, OverlayView } from '@react-google-maps/api';
import "../output.css";
import BottomBar from "./BottomBar.jsx";
import customMarkerImage from "../images/name_only.png"; // Import your custom marker image

export default function OutputsPage() {
  // Define the initial position of the map
  const initialPosition = { lat: 51.5074, lng: -0.1278 }; // London, UK

  // Define custom marker dimensions
  const markerSize = { width: 50, height: 50 };

  // Custom overlay view component for the first marker
  const CustomMarker1 = ({ position }) => {
    return (
      <OverlayView
        position={position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={(width, height) => ({
          x: -(width / 2),
          y: -height
        })}
      >
        <div style={{ position: 'absolute', width: markerSize.width, height: markerSize.height, transform: 'translate(-50%, -100%)' }}>
          <img src={customMarkerImage} alt="Custom Marker 1" style={{ width: '100%', height: '100%', zIndex: 1000 }} />
        </div>
      </OverlayView>
    );
  };

  // Custom overlay view component for the second marker
  const CustomMarker2 = ({ position }) => {
    return (
      <OverlayView
        position={position}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={(width, height) => ({
          x: -(width / 2),
          y: -height
        })}
      >
        <div style={{ position: 'absolute', width: markerSize.width, height: markerSize.height, transform: 'translate(-50%, -100%)' }}>
          <img src={customMarkerImage} alt="Custom Marker 2" style={{ width: '100%', height: '100%', zIndex: 1000 }} />
        </div>
      </OverlayView>
    );
  };

  return (
    <>
      <div className="mt-5 ml-6 mb-20">
        <GoogleMap
          mapContainerStyle={{ width: '50%', height: '600px' }}
          center={initialPosition}
          zoom={8}
        >
          {/* Add the first custom marker */}
          <CustomMarker1 position={{ lat: 51.5074, lng: -0.1278 }} />
          {/* Add the second custom marker */}
          <CustomMarker2 position={{ lat: 52, lng: 0 }} />
        </GoogleMap>
      </div>
      <div>
        <BottomBar />
      </div>
    </>
  );
}
