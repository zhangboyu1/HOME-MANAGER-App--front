// import React from 'react';
// import CurrentWeather from './CurrentWeatherInfo/CurrentWeather.jsx';
// import Details from './Details/Details.jsx';
// import SearchBar from './SearchBar/SearchBar'
// // import '../../App.scss';

// import './WeatherCard.css'





// export default class WeatherCard extends React.Component {

//     constructor(props) {
//         super()
//     }

//     render() {
//         const { currently, timeZone, daily } = this.props
//         return (

//             <>
//                 <div className="card_weather">
//                     <CurrentWeather currently={currently ? currently : ''} timeZone={timeZone ? timeZone : ''} />
//                     <Details daily={daily} />
//                     {
//                         this.props.firsLoading ||
//                         <div id="loader-wrapper">
//                             <div id="loader"></div>
//                         </div>
//                     }
//                     <SearchBar searchWeather={this.searchW} />
//                 </div>
//             </>
//         );
//     }
// }