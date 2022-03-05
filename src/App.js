import './App.css';
import About from './About';
import Contact from './Contact';
import React,{useState} from 'react';
import Contact1 from './Contact1';
import Users from './Users';
import CreateUser from './CreateUser';
import { Link,Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar,Nav,Container } from 'react-bootstrap';
import Home from './Home';
function App() {
  const [name,setName] = useState("mannu")
  return (
    <div className="App">

      {/* <h1>Hello from Ravi</h1> */}
      {/* <About name={name}/> */}
      {/* <Contact name={name}/>
      <button onClick={()=>setName("urvi")}>update name</button> */}
      {/* <Contact1/> */}
      {/* <Users/> */}
      {/* <CreateUser/> */}
      <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
          <Nav.Link href="#features"><Link to="/about">About Us</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link to="/contact">Contact Us</Link></Nav.Link>
          <Nav.Link href="#features"><Link to="/list">User List</Link></Nav.Link>
          <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/list" element={<Users />}/>
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/" element={<Home />}/>
         
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
