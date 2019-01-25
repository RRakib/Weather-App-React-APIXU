import React , {Component} from "react"
import "./BottomCss.css"
class BottomContainer extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    const {forecast} = this.props;
    let output = forecast.map((items, key) => {
      return(
        <div className="week">
              <div key={key.date}><img src={items.day.condition.icon} alt="Weather" /></div>
              <div key={key.date}>{items.day.condition.text}</div>
            </div>
      )
    })
    return(
        <div className = "bottomContainer">
        <h3><u>Next 7 Days Forecase...</u></h3>
          <div className="bottomMain">
              {output}
          </div>
        </div>
    )
  }
}


export default BottomContainer;