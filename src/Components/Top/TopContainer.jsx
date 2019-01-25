import React , {Component} from "react"
import Weather from "./Weather.jsx"
import "./Weather.css"

class TopContainer extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="topContainer">
              <div className="topMain">
                  <header>
                    WEATHER APP
                  </header>
                  <main>
                    <Weather 
                        temp_c={this.props.temp_c} 
                        text = {this.props.text}
                        cityName = {this.props.cityName}
                        is_day = {this.props.is_day}
                        handleChange = {this.props.handleChange}
                    />
                  </main>
              </div>
            </div>
        )
    }
}


export default TopContainer;