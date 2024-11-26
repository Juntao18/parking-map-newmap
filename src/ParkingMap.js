import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Parking coordinate in Google Map
const parkingLots = [
  { id: 1, name: "Car Park 1", position: [53.3824948, -6.6033351] },
  { id: 2, name: "Car Park 2", position: [53.3838727, -6.6032683] },
  { id: 3, name: "Car Park 3", position: [53.3846950, -6.6043691] },
  { id: 1, name: "Car Park 4", position: [53.3855265, -6.6033347] },
  { id: 2, name: "Car Park 5A", position: [53.3853493, -6.6009690] },
  { id: 3, name: "Car Park 6C", position: [53.3852019, -6.5978023] },
];

// Leaflet 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function ParkingMap() {
  return (
    <MapContainer center={[53.3824040, -6.5991209]} zoom={16} style={{ height: "80vh", width: "100%" }}>
      {/* use OpenStreetMap as TileLayer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* show parklot location  */}
      {parkingLots.map(lot => (
        <Marker key={lot.id} position={lot.position}>
          <Popup>
            <b>{lot.name}</b><br />Status: Available
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ParkingMap;
