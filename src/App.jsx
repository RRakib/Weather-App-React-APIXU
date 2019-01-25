import React, { Component } from 'react';
import TopContainer from "./Components/Top/TopContainer.jsx";
import BottomContainer from "./Components/Bottom/BottomContainer.jsx";
import './App.css';

const WeatherKey = "28ad4f26d64542edac4104803192501";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName : "Dhaka",
      forcastDays : 7,
      temperature : "",
      text : "",
      is_day : "",
      forecast : [

      ]
    }
  }
  componentDidMount = () => {
    const {cityName , forcastDays } = this.state;
    fetch(`https://api.apixu.com/v1/forecast.json?key=${WeatherKey}&q=${cityName}&days=${forcastDays}`)
      .then(response => (
        response.json()
      ))
      .then(response2 => (
        this.setState({
          temperature : response2.current.temp_c,
          text : response2.current.condition.text,
          icon : response2.current.condition.icon,
          is_day : response2.current.is_day,
          forecast : response2.forecast.forecastday,
        })
      ))
      .catch(err => {
        if(err){
          console.log("Could not fetch data")
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      cityName : e.target.value
    })
    this.componentDidMount();
}


  render() {
    const {temperature , text , cityName , is_day , forecast} = this.state
    return (
      <div className="App">
        <TopContainer 
          temp_c = {temperature}
          text = {text}
          cityName = {cityName}
          is_day = {is_day}
          handleChange = {this.handleChange}
        />
        <BottomContainer forecast = {forecast} />
      </div>
    );
  }
}

export default App;
