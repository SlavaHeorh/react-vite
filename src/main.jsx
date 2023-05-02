import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import Home from "./components/screens/home/Home.jsx";
import RouterComponent from "./components/Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
)
