import './App.css'
import './init'
import { Amplify } from 'aws-amplify'
import {Authenticator} from '@aws-amplify/ui-react'
import awsConfig from './aws-exports'
import '@aws-amplify/ui-react/styles.css';


import ReactMapGL, {
  NavigationControl,
  Source,
  Layer,
  Marker
} from "react-map-gl";

Amplify.configure(awsConfig)

import Header from './components/Header'
import { useState } from 'react'


function App() {

  const INITIAL_VIEWPORT = {
    longitude: -56.164532,
    latitude: -34.901112,
  }
  

  const [transformRequest, setRequestTransformer] = useState();

  const [viewport, setViewport] = useState({
    longitude: INITIAL_VIEWPORT.longitude,
    latitude: INITIAL_VIEWPORT.latitude,
    zoom: 13,
  });


  return (
    <>
      <Authenticator >
      <div className='App'>
        <Header/>
        <div>
        </div>
      </div>
      </Authenticator>
    </>
  )
}

export default App
