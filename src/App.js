import React from 'react';
import './App.scss';

import WeatherCard from './Component/WeatherCard';
import NextPage from './Component/NextPage';


function App() {
    
    return (

        <div className="container">
            
            <NextPage />

            <WeatherCard />

        </div> 
 
);
}
export default App;