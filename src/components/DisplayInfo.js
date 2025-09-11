import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";
class DisplayInfo extends React.Component{
    state = {
        isShow: true,
    }
    handleShowHide = (event) =>{
        this.setState({
            isShow: !this.state.isShow,
        })
    }
    render(){
        
        const {listUsers} = this.props 
        // console.log(listUsers);
        return(
            
            <div className = 'display-infor-container'>
                {/* <img src={logo}/> */}
                <div>
                    <span onClick={(event)=> {
                        this.handleShowHide(event)
                    }}>
                        {this.state.isShow === true ? "Hide list user:" : "Show list user:"} 
                    </span>
                </div>
                    {this.state.isShow &&
                <div>
                {listUsers.map((user)=>{
                    return (
                        <div key={user.id} className={user.age + ""<18 ? "red" : "green"}>
                            <div>My name's {user.name}</div>
                            <div>My age's  {user.age}</div>
                            <div>
                                <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo;