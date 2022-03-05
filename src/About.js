import React from "react";

class About extends React.Component{
    constructor(){
        super();
        // this.state={
        //     name:"ravi",
        //     age:25
        // }
    }
    componentDidMount(){
        // console.warn("did mount");
        console.warn("did mount",this.props.name);
    }
    componentDidUpdate(){
        // console.warn("did Update");
        console.warn("did update",this.props.name);
    }
    render(){
        return (
            <div>
                <h1>About us page</h1>
                {/* <h2>{this.state.name}</h2>
                <button onClick={() => {this.setState({name:"ravi Prajapati"})}}>Update State</button> */}
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default About;


