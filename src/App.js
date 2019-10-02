import React from 'react';
import './App.scss';

import WeatherCard from './Component/WeatherCard';
import NextPage from './Component/NextPage';
import Forms from './Component/Forms';

function App() {
    
    return (

        <div className="container">
            
            <NextPage />

            <WeatherCard />

            <Forms />

        </div> 
 
);
}
export default App;