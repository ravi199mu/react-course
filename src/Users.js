import React,{useState, useEffect} from "react";
import {Button,Table} from "react-bootstrap";

function Users() {
    // const [user,setUser] = useState([
    //     {name:"ravi",age:25},
    //     {name:"urvi",age:1},
    //     {name:"mannu",age:25}
    // ]);

    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn("result",result);
                setUser(result.data)
            })
        })
    },[])

    return (
        <div>
            <h1>user listing</h1>
            {/* {
                user.map((item,i) =>
                    <div key={i}>{item.name}, {item.age}</div>
                )
            } */}
            {/* {
                user.length === 3 ? <div>yes it correct </div> : <div> nope</div>
            } */}

            <h2>user listing h2</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>name</th>
                <th>salary</th>
                <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item,i)=><tr>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    </tr>
                    )
                }
            </tbody>
            </Table>
            
        </div>
      );
}

export default Users;