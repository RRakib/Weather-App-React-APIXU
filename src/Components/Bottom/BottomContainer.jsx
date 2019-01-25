import React , {Component} from "react"
import "./BottomCss.css"
class BottomContainer extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
        <div className = "bottomContainer">
          <div className="bottomMain">
            <div className="week">
              <div></div>
              <div></div>
            </div>
            <div className="week">
              <div></div>
              <div></div>
              </div>
            <div className="week">
              <div></div>
              <div></div>
            </div>
            <div className="week">
              <div></div>
              <div></div>
            </div>
            <div className="week">
              <div></div>
              <div></div>
            </div>
            <div className="week">
              <div></div>
              <div></div>
            </div>
            <div className="week">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
    )
  }
}


export default BottomContainer;