//Class component

import React, { Fragment, useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

//Function component 
const MyComponent = (props)=> {
    const [listUsers, setListUsers] = useState([
            {id: 1, name:"Cong Pha", age:20},
            {id: 2, name:"Tra Nhu", age:19},
            {id: 3, name:"TMDEY", age:1},
        ])

    const handleAddNewUser = (obj) => {
        setListUsers([obj,...listUsers])
    }
    const handleDeleteUser = (userID) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userID)
        setListUsers(listUsersClone)
    }

    //JSX
        return (
            <>
            <div className = "A"> 
                <AddUserInfo handleAddNewUser={handleAddNewUser}></AddUserInfo>
                <br/>
                <DisplayInfo listUsers={listUsers} handleDeleteUser = {handleDeleteUser}/>
            </div>
            <div className="B">
                HEllo World
            </div>
            </>
            
        );
}
export default MyComponent;