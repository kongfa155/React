//Class component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name:"Cong Pha", age:20},
            {id: 2, name:"Tra Nhu", age:19},
            {id: 3, name:"TMDEY", age:1}
        ]
    }
    //JSX
    render(){
        return (
            <div> 
                <UserInfo></UserInfo>
                <br/>
                <DisplayInfo listUsers={this.state.listUsers}/>
            </div>
            
        );
    }
} 

//Function component 

export default MyComponent;