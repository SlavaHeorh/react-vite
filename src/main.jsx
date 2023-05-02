import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import Home from "./components/screens/home/Home.jsx";
import RouterComponent from "./components/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterComponent/>
        </AuthProvider>
    </React.StrictMode>,
)
