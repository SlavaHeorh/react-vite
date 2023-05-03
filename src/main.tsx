import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import Home from "./components/screens/home/Home.js";
import RouterComponent from "./components/Router.js";
import AuthProvider from "./providers/AuthProvider.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterComponent/>
        </AuthProvider>
    </React.StrictMode>,
)
