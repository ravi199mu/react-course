import { useState } from "react";

function CreateUser() {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [address,setAddress] = useState("");
    function makeUser(){
        let data = {name,age,address};
        console.warn("called",data);
    }
    return (
        <>
            <h1>Make a new user</h1>
            <input onChange={(e)=>setName(e.target.value)} 
            type="text" 
            name="name" 
            value={name}/><br></br>
            <input 
            onChange={(e)=>setAge(e.target.value)} 
            type="text" 
            name="age" value={age}/><br></br>
            <input
            onChange={(e)=>setAddress(e.target.value)}
            type="text" 
            name="address" value={address}/><br></br>
            <button onClick={makeUser}>Create User</button>
        </>
      );
}

export default CreateUser;