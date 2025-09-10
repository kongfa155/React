import React from "react";

class UserInfo extends React.Component{

    state = {
        name: "Lif",
        address: "Can Tho",
        age: 26
    }
    handleOnChangeInput = (event)=> {
        this.setState({
            name: event.target.value,
        })
        
    }
    handleOnChangeAge = (event)=> {
        this.setState({
            age: event.target.value,
        })
        
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    
    render(){
        return (
             <div>
                My name is {this.state.name} and I'm  {this.state.age}
                
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                    value = {this.state.name}
                    onChange={(event) =>{ this.handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                </form>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                    value = {this.state.age}
                    onChange={(event) =>{ this.handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
             </div>
        )
    }
}

export default UserInfo;