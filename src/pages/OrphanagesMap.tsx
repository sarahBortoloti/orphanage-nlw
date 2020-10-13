import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../imgs/map-marker.svg";

function OrphanagesMap() {
  console.log(process.env.REACT_APP_MAPBOX_TOKEN);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criancas estao esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <div>
        <Map
          center={[-22.0026024, -47.9119285]}
          zoom={15}
          style={{
            width: '100vw',
            height: '100vh',
          }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> */}

        </Map>
        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </div>
  );
}

export default OrphanagesMap;
