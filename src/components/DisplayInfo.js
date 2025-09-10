import React from "react";

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
            
            <div>
                <did>
                    <span onClick={(event)=> {
                        this.handleShowHide(event)
                    }}>
                        {this.state.isShow === true ? "Hide list user:" : "Show list user:"} 
                    </span>
                </did>
                    {this.state.isShow &&
                <div>
                {listUsers.map((user)=>{
                    return (
                        <div key={user.id} className={user.age + ""<18 ? "red" : "green"}>
                            <div>My name's {user.name}</div>
                            <div>My age's  {user.age}</div>
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