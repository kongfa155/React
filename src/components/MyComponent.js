//Class component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: "Lif",
        address: "Can Tho",
        age: 26
    }
    handleClick(event){
        console.log("My name is ", this.state.name, " And I am ", this.state.age);

        this.setState({
            name: "Cong Pha",
            // address: "Can Tho",
            // age: 26
        })

        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnMoveOver(event){
        console.log(event.pageX);
    }
    //JSX
    render(){
        return (
            <div> 

                My name is {this.state.name} and I'm  {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover Me</button>
            </div>
        );
    }
} 

//Function component 

export default MyComponent;