//Class component

import React from "react";
class MyComponent extends React.Component {
    //JSX
    render(){
        return (
            <div> my first component 

                {Math.random()}
            </div>
        );
    }
} 

//Function component 

export default MyComponent;