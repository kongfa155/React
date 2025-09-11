import React, { useState } from "react";


const AddUserInfo = (props) => {
    const [state, setState] = useState({
        name: "",
        address: "Can Tho",
        age: '',
    })
    const handleOnChangeInput = (event)=> {
        setState({name: event.target.value})
        
    }
    const handleOnChangeAge = (event)=> {
        setState({age: event.target.value})
        
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: state.name,
            age: state.age
        });
    }
    
        return (
             <div>
                My name is {state.name} and I'm  {state.age}
                
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <input type="text" 
                    value = {state.name}
                    onChange={(event) =>{ handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                </form>
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <input type="text" 
                    value = {state.age}
                    onChange={(event) =>{ handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
             </div>
        )
}
export default AddUserInfo;