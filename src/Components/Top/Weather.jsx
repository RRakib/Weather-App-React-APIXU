import React , {Component} from "react"
import sun from "../../Image/Sun.png"
import moon from "../../Image/Moon.png"

class Weather extends Component{
    constructor(){
        super();
        this.state = {
            display : ""
        }
    }
    handleClickPop = () => {
        this.setState({
            display : "block"
        })
    }
    handleClickClose = () => {
        this.setState({
            display : "none"
        })
    }

    render(){
        const {temp_c, text , cityName , is_day , handleChange} = this.props;
        const day = {
            background : "#FFB95D"
        }
        const night = {
            background : "#133ea1",
            color: "#eeeeee"
        } 
        return(
            <div className="weatherContainer">
                <p>{cityName}</p>
                <div className="weatherInfo">
                    <div><img src={is_day ? sun : moon} alt="Day/Night"/></div>
                    <div style={{color : "#E1E1E1" , fontWeight : "bold" , fontSize : 26}}>{temp_c} &#0176;</div>
                </div>
                <h3>{text}</h3>
                <button onClick={this.handleClickPop} style={is_day? day : night}>Select Location</button>

                {/* /////////////////////////////////////////////////////////////////////////////PopUp */}
                <div className="popUp" style={{display : this.state.display}}>
                    <button onClick={this.handleClickClose}>X</button>
                    <select onChange={handleChange}>
                        <option value="Dhaka">1.Dhaka</option>
                        <option value="Chittagong">2.Chittagong</option>
                        <option value="Gazipur">3.Gazipur</option>
                        <option value="Khulna">4.Khulna</option>
                        <option value="Sylhet">5.Sylhet</option>
                        <option value="Narayanganj">6.Narayanganj</option>
                        <option value="Rajshahi">7.Rajshahi</option>
                        <option value="Barisal">8.Barisal</option>
                        <option value="Comilla">9.Comilla</option>
                        <option value="Mymensingh">10.Mymensingh</option>
                        <option value="Rangpur">11.Rangpur</option>
                    </select>
                </div>
            </div>
        )
    }
}


export default Weather;