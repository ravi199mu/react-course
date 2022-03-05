import React,{useEffect,useState} from "react";

function Contact(props){
   
    // const [name,setName] = useState("ravi");
    // const [age,setAge] = useState(25);

    //calls only once
    useEffect(()=>{
        console.warn("first time ",props);
    },[])
     //calls only once
     useEffect(()=>{
        console.warn("when update name ",props.name);
    },[props.name])
    return(
        <div>
            <h1>Contact page</h1>
            <h2>{props.name}</h2>
            {/* <h2>{age}</h2>
            <button onClick={()=>setAge(23)}>update age</button>
            <button onClick={()=>setName("bitch")}>update name</button> */}
        </div>
    );
}

export default Contact;