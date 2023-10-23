import './App.css'
import './init'
import { Amplify, Auth } from 'aws-amplify'
import awsConfig from './aws-exports'
import '@aws-amplify/ui-react/styles.css';


import { withIdentityPoolId } from "@aws/amazon-location-utilities-auth-helper";

Amplify.configure(awsConfig)

import { useEffect, useState } from 'react'
import maplibregl from 'maplibre-gl'


function App() {
  const identityPoolId = "us-east-1:6a622dc1-92c9-43f6-83e2-763bb830fa0c"
  const mapName = "MyAppMap"
  const region = "us-east-1";

  async function initializeMap() {
    const authHelper = await withIdentityPoolId(identityPoolId);
    const map = new maplibregl.Map({
      container: "map",
      center: [-123.115898, 49.295868],
      zoom: 10,
      style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor`,
      ...authHelper.getMapAuthenticationOptions(),
    });
    map.addControl(new maplibregl.NavigationControl(), "top-left");
  }

  initializeMap();
  

  return (
    <>
    <div id="map" />

    </>
  )
}

export default App
