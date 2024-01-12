import React,{Component} from "react";

class PropsDemo extends Component{
    render(){
        // name : Nguyen Van A
        // age : 18
        // address : Ha Noi
        //className : T2308E
        console.log(this.props);
        return (
            <div>
                <p>My name : {this.props.name} , {this.props.age} age ,
                live in {this.props.address}, class : {this.props.className}</p>
            </div>
        )
    }
}
export default PropsDemo;
