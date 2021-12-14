import './App.css';
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as parkData from './data/data.json'

function App() {
  const [activePark, setActivePark] = useState(null)

  return (
    <div className="App">
      <MapContainer center={[45.421532, -75.697189]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0]
            ]}
          >
            <Popup>
              <div>
                <h2>{park.properties.NAME}</h2>
                <p>{park.properties.DESCRIPTIO}</p>
              </div>
            </Popup>

          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}

export default App;
