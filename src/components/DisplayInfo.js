import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

const DisplayInfo = (props) => {
        const {listUsers} = props;         
        const [isShowHideListUser, setShowHideListUser]  = useState(true);
        console.log(listUsers);
        const handleShowHideListUser = ()=> {
            setShowHideListUser(!isShowHideListUser);
        }
        return(
            
            <div className = 'display-infor-container'>
                <div>
                    <span onClick = {() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? "Hide this user" : "Show this user"}
                    </span>
                </div>
                {/* <img src={logo}/> */}
                    {isShowHideListUser &&
                <div>
                {listUsers.map((user)=>{
                    return (
                        <div key={user.id} className={user.age + ""<18 ? "red" : "green"}>
                            <div>My name's {user.name}</div>
                            <div>My age's  {user.age}</div>
                            <div>
                                <button onClick={()=>props.handleDeleteUser(user.id)}>Delete</button>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
                </div>
                    }
            </div>
    
        )
}
export default DisplayInfo;