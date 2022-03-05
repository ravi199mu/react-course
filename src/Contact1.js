import React,{useState} from 'react';

function Contact1() {
    const [val,setVal] = useState("ravi");
    function test(e){
        setVal(e.target.value);
    }
    return (
        <div>
            <h1>Contact us component</h1>
            <input type="text" value={val} onChange={test}/>
             <button onClick={()=>alert(val)}>click me</button>
        </div>
     );
}

export default Contact1;