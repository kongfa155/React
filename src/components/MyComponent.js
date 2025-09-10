//Class component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: "Lif",
        address: "Can Tho",
        age: 26
    }
    handleOnChangeInput = (event)=> {
        this.setState({
            name: event.target.value,
        })
        
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render(){
        return (
            <div> 

                My name is {this.state.name} and I'm  {this.state.age}
                
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                    onChange={(event) =>{ this.handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
} 

//Function component 

export default MyComponent;