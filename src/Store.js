import React , {Component} from "react";

class Store extends Component{
    constructor(props){
        super(props);
        this.state = {
            appName : "Weather App"
        }
    }
    render(){
        React.Children.map(this.props.children , (child) => { 
            return React.cloneElement(child , {...this.state})
            })
        return(
            <div>
            </div>
        )
    }
}

export default Store;