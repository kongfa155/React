import React, { useState } from "react";


const AddUserInfo = (props) => {
    const [name, setName] = useState("Lif");
    const [age, setAge] = useState("19");
    const [address, setAddress] = useState("");
    const handleOnChangeInput = (event)=> {
        setName(event.target.value)
        
    }
    const handleOnChangeAge = (event)=> {
        setAge(event.target.value)
        
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        });
    }
    
        return (
             <div>
                My name is {name} and I'm  {age}
                
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <input type="text" 
                    value = {name}
                    onChange={(event) =>{ handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                </form>
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <input type="text" 
                    value = {age}
                    onChange={(event) =>{ handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
             </div>
        )
}
export default AddUserInfo;