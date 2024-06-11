import React, { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { TravelContext } from "../context/TravelContext";
import "../output.css";
import BottomBar from "./BottomBar.jsx";

const mapContainerStyle = {
  width: '100%',
  height: '600px',
};

export default function MapsPage() {
  const { formData } = useContext(TravelContext);
  const [locations, setLocations] = useState({
    1: [{ lat: 51.5074, lng: -0.1278 }, { lat: 51.5007, lng: -0.1246 }], // London, Big Ben
  });
  const [directionsOptions, setDirectionsOptions] = useState(null);
  const [response, setResponse] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1); // Default to day1

  useEffect(() => {
    //day 1: [0] index is start address each day
    if (formData.destination.toLowerCase() === "london") {
      setLocations({
        1: [{ lat: 51.502558, lng: -0.119768 }, { lat: 51.519413, lng: -0.127012 }, { lat: 51.512344, lng: -0.119768 }], //
        2: [{ lat: 51.502558, lng: -0.119768 }, { lat: 51.4966, lng:  -0.1722}, { lat:  51.4967, lng: -0.1764 }, { lat: 51.5013, lng: -0.1608 },{ lat: 51.4995, lng: -0.1633 },], // London, Big Ben
        3: [{ lat: 51.502558, lng: -0.119768 }, { lat: 51.5076, lng: -0.0994 }, { lat: 51.5054, lng:  -0.0911}, { lat:51.5081 , lng: -0.0967 },{ lat:51.5145, lng:  -0.1425}], // St. Paul's Cathedral,
        Combined: [{ lat: 51.502558, lng: -0.119768 }, { lat: 51.519413, lng: -0.127012 }, { lat: 51.512344, lng: -0.119768 },
          { lat: 51.4966, lng:  -0.1722}, { lat:  51.4967, lng: -0.1764 }, { lat: 51.5013, lng: -0.1608 },{ lat: 51.4995, lng: -0.1633 },
          { lat: 51.5076, lng: -0.0994 }, { lat: 51.5054, lng:  -0.0911}, { lat:51.5081 , lng: -0.0967 },{ lat:51.5145, lng:  -0.1425},]
      });
    } else if(formData.destination.toLowerCase() === "athens") {

      setLocations({
        1: [{lat: 37.9731, lng:23.7328 }, {lat: 37.9715, lng: 23.7261}, 
          {lat: 37.9685,lng:23.7283}, {lat: 37.9722, lng: 23.7298}, 
        {lat:  37.9735,lng: 23.7266},],
        2: [{lat: 37.9731, lng:23.7328 }, {lat: 37.9695,lng:23.7349}, {lat: 37.9686, lng: 23.7413},
        {lat: 37.9852, lng: 23.7236}, {lat:37.9769, lng:23.7286},
      {lat: 37.9755, lng:23.7358}, {lat:37.9792, lng: 23.7207}],
      3: [{lat: 37.9731, lng:23.7328 }, {lat:37.66512, lng:24.01244}, 
      {lat: 37.9838, lng: 23.7275}, {lat: 37.9773, lng: 23.7268}],
      4:[{lat: 37.9731, lng:23.7328 }, {lat:37.97862582066727, lng:23.743273577301274},
      {lat:37.97536806334691, lng:23.744622278538507}, {lat:37.983313458887835, lng:23.717662718101924},
    {lat:37.97664140395841, lng:23.725127550068244}, {lat:37.96954896068026, lng:23.724401974309558}],
    Combined: [{lat: 37.9731, lng:23.7328 }, {lat: 37.9715, lng: 23.7261}, 
      {lat: 37.9685,lng:23.7283}, {lat: 37.9722, lng: 23.7298}, 
    {lat:  37.9735,lng: 23.7266}, {lat: 37.9695,lng:23.7349}, {lat: 37.9686, lng: 23.7413},
    {lat: 37.9852, lng: 23.7236}, {lat:37.9769, lng:23.7286},
  {lat: 37.9755, lng:23.7358}, {lat:37.9792, lng: 23.7207}, {lat: 37.9731, lng:23.7328 }, {lat:37.66512, lng:24.01244}, 
  {lat: 37.9838, lng: 23.7275}, {lat: 37.9773, lng: 23.7268},{lat: 37.9731, lng:23.7328 }, {lat:37.97862582066727, lng:23.743273577301274},
  {lat:37.97536806334691, lng:23.744622278538507}, {lat:37.983313458887835, lng:23.717662718101924},
{lat:37.97664140395841, lng:23.725127550068244}, {lat:37.96954896068026, lng:23.724401974309558}],
  
        
      });
    }else if(formData.destination.toLowerCase() === "mexico city") {
      // {lat: 19.435528683622433, lng: -99.13314045335787} : hotel, central location
      setLocations({
        1: [{lat: 19.435528683622433, lng: -99.13314045335787}, {lat: 19.432335360407794, lng: -99.13423859277705},
        {lat: 19.435701013375617, lng:-99.13803584526956}, {lat: 19.4205530587981, lng: -99.18201658806534},
      {lat: 19.43328929403508,lng: -99.13629871872783}], //
      2:[{lat: 19.435528683622433, lng: -99.13314045335787},{lat: 19.108428723372242, lng:-99.75458839378399}, 
        {lat: 19.41514015312715, lng: -99.16255243337913}],
        3: [{lat: 19.435528683622433, lng: -99.13314045335787}, {lat: 19.000631486818985, lng:-99.1011075254068},
          {lat: 18.987970677175245, lng:-99.10091094402885}, {lat: 19.42837754207736, lng:-99.20365014834304},
        ],
        4: [{lat: 19.435528683622433, lng: -99.13314045335787}, {lat: 19.295742120919464, lng:-99.31392342985707},
        {lat: 19.42107945412983, lng: -99.16586900390212},],
        Combined: [{lat: 19.435528683622433, lng: -99.13314045335787}, {lat: 19.432335360407794, lng: -99.13423859277705},
          {lat: 19.435701013375617, lng:-99.13803584526956}, {lat: 19.4205530587981, lng: -99.18201658806534},
        {lat: 19.43328929403508,lng: -99.13629871872783},{lat: 19.108428723372242, lng:-99.75458839378399}, 
        {lat: 19.41514015312715, lng: -99.16255243337913},{lat: 19.000631486818985, lng:-99.1011075254068},
        {lat: 18.987970677175245, lng:-99.10091094402885}, {lat: 19.42837754207736, lng:-99.20365014834304},{lat: 19.295742120919464, lng:-99.31392342985707},
        {lat: 19.42107945412983, lng: -99.16586900390212},
      ]
        
      });
    } else if(formData.destination.toLowerCase() === "venice") {
      //hotel: {lat: 45.437647226795235, lng:12.336092710658015}
      setLocations({
        1: [{lat: 45.437647226795235, lng:12.336092710658015}, {lat: 45.434192742207074, lng:12.338392925045932},
        {lat: 45.43389061142997, lng: 12.342155758691563}, {lat: 45.435387645805065, lng: 12.33040813195475},], //
        2:[{lat: 45.437647226795235, lng:12.336092710658015},{lat: 45.43372182468003, lng:12.340372709269394},
          {lat: 45.43364047466645, lng: 12.341009566176297}, {lat: 45.43642147639462, lng:12.337738382617488},
          {lat: 45.43799825915856, lng: 12.335889640174667}, {lat:45.43405230817208, lng: 12.34761385466538 },
        ],
        3: [{lat: 45.437647226795235, lng:12.336092710658015},{lat:45.45598362836747, lng:12.352697369621087},
        {lat: 45.4855974641194, lng: 12.416555402193818},{lat: 45.48532066322044, lng: 12.417877529948298},
        {lat: 45.44419172319987, lng: 12.328428125912875}, {lat: 45.4335815645264, lng: 12.323117668430534},
        {lat: 45.4411305006907, lng: 12.328454086367108}, {lat: 45.504604996016965, lng: 12.348184005436565},],
        Combined: [{lat: 45.437647226795235, lng:12.336092710658015}, {lat: 45.434192742207074, lng:12.338392925045932},
          {lat: 45.43389061142997, lng: 12.342155758691563}, {lat: 45.435387645805065, lng: 12.33040813195475},
          {lat: 45.43372182468003, lng:12.340372709269394},
          {lat: 45.43364047466645, lng: 12.341009566176297}, {lat: 45.43642147639462, lng:12.337738382617488},
          {lat: 45.43799825915856, lng: 12.335889640174667}, {lat:45.43405230817208, lng: 12.34761385466538 },
          {lat:45.45598362836747, lng:12.352697369621087},
        {lat: 45.4855974641194, lng: 12.416555402193818},{lat: 45.48532066322044, lng: 12.417877529948298},
        {lat: 45.44419172319987, lng: 12.328428125912875}, {lat: 45.4335815645264, lng: 12.323117668430534},
        {lat: 45.4411305006907, lng: 12.328454086367108}, {lat: 45.504604996016965, lng: 12.348184005436565},
        ]
 });
    } else {
      setLocations({
        1: [{ }]
      });
    }
  }, [formData.destination]);

  useEffect(() => {
    if (locations[selectedDay].length >= 1) {
      setDirectionsOptions({
        destination: locations[selectedDay][locations[selectedDay].length - 1],
        origin: locations[selectedDay][0],
        travelMode: (formData.destination.toLowerCase() === "venice")? 'WALKING':'DRIVING',
        waypoints: locations[selectedDay].slice(1, -1).map(location => ({ location }))
      });
    }
  }, [locations, selectedDay]);

  const directionsCallback = useCallback((result, status) => {
    if (status === 'OK') {
      setResponse(result);
    } else {
      console.error(`Error fetching directions ${status}`);
    }
  }, []);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  // Get valid day options
  const validDayOptions = Object.keys(locations);

  return (
    
    <LoadScript googleMapsApiKey="AIzaSyBvOzOWCi1kdGAIQRwVtkVH1uMarOAnWyY">
      <div className = "mt-4 ml-16 mb-8">
        <select value={selectedDay} onChange={handleDayChange}>
          {validDayOptions.map((dayOption) => (
            <option key={dayOption} value={dayOption}>Day {dayOption}</option>
          ))}
        </select>
        
      </div>

      
      <div className="mt-2 ml-16 mb-20">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={locations[selectedDay][0]}
          zoom={10}
        >
          {directionsOptions && selectedDay && (
            <DirectionsService
              options={directionsOptions}
              callback={directionsCallback}
            />
          )}
          {response && selectedDay && (
            <DirectionsRenderer
              options={{
                directions: response
              }}
            />
          )}
          {/* Render markers for the selected day */}
          
        </GoogleMap>
      </div>
      
      <div>
        <BottomBar />
      </div>
    </LoadScript>
  );
}
