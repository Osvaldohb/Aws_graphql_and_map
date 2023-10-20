import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  './init.jsx'
import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports.js'
import Task from './pages/Task';
Amplify.configure(awsExports);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
