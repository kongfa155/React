//Class component

import React, { Fragment } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name:"Cong Pha", age:20},
            {id: 2, name:"Tra Nhu", age:19},
            {id: 3, name:"TMDEY", age:1}
        ]
    }

    handleAddNewUser = (obj) => {
        this.setState({
            listUsers: [obj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userID) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userID)
        this.setState({
            listUsers: listUsersClone,
        })
    }
    //JSX
    render(){
        return (
            <>
            <div className = "A"> 
                <AddUserInfo handleAddNewUser={this.handleAddNewUser}></AddUserInfo>
                <br/>
                <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser = {this.handleDeleteUser}/>
            </div>
            <div className="B">
                HEllo World
            </div>
            </>
            
        );
    }
} 

//Function component 

export default MyComponent;