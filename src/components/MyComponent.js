//Class component

import React from "react";
class MyComponent extends React.Component {

    state = {
        name: "Lif",
        address: "Can Tho",
        age: 26
    }

    //JSX
    render(){
        return (
            <div> 

                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
} 

//Function component 

export default MyComponent;