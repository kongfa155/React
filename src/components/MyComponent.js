//Class component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    
    //JSX
    render(){
        return (
            <div> 
                <UserInfo></UserInfo>
                <br/>
                <DisplayInfo name="Cong Pha" age="20"/>
                <hr/>
                <DisplayInfo name="Tra Nhu" age="19"/>
            </div>
            
        );
    }
} 

//Function component 

export default MyComponent;