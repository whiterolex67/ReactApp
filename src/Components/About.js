
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent construtor");
    }
    componentDidMount(){
        // console.log("Parent Mount");
    }
    render(){
        // console.log("parent render");
        return (
            <div>
                <h1>About us Page</h1>
            </div>
        )
    }
}
export default About;