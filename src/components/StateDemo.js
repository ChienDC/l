import React from "react";

class StateDemo extends React.Component{
    // ham khoi tao : constructor
    constructor(props){
        super(props);
        this.state = {
            num : 0
        };
    }
    // create instance of StateDemo with props and state
    render(){
        return(
            <div>
                <p>Number : {this.state.num}</p>
                <button onClick={() => {
                    this.setState({
                        num : this.state.num + 1
                    });
                }}>Increase</button>
            </div>
        )
    }
}
export default StateDemo;