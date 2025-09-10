//Class component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: "Lif",
        address: "Can Tho",
        age: 26
    }
    handleClick(event){
        console.log("My name is ", this.state.name);
    }
    handleOnMoveOver(event){
        console.log(event.pageX);
    }
    //JSX
    render(){
        return (
            <div> 

                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover Me</button>
            </div>
        );
    }
} 

//Function component 

export default MyComponent;