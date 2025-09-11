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
    componentDidUpdate(prevProps, preStates, snapshot){
        console.log("call me componentDidUpdate", this.props, prevProps);
        if(this.props.listUsers.length === 5){
            alert("You got 5 User");
        }
    }
    componentDidMount() {
        console.log("call me component did mount");
        setTimeout(()=> {
            document.title = "Hello"
        }, 5000)
    }
    render(){
        console.log("call me render")
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