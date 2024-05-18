import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Cards from "./pages/Cards.jsx";
import CardsChildren from "./pages/CardsChildren.jsx";
import About from "./pages/About.jsx";
import Contatti from "./pages/Contatti.jsx";
import Card from "./pages/Card.jsx";

import store from './redux/store'
import {Provider} from 'react-redux'



const router = createBrowserRouter([
        {path: '/', element: <App/>},
        {path: '/about', element: <About/>} ,
        {path: '/contacts', element: <Contatti/>},
        {
            path: '/cities',
            element: <Cards/>,
        },
        {
            path: '/cities/:cityID',
            element: <Card/>,
        },
        {
            path: '/cards-children',
            element: <CardsChildren/>,
            children: [
                {
                    path: ':cityID',
                    element: <Card />
                },
            ]
        },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
