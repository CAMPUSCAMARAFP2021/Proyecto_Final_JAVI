import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BdwinnerList from './components/BdwinnersList';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';



const App = () =>{
 const [jwt, setJwt] = useState(false);

/*  const onLoginClick = (user, password) => {
   login(user,password)
    .then((jwt)=> setJwt(jwt))
    .catch((error) => console.log('falla'))
 }
   */

 return <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
     
        {/* <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton> */}
        <BdwinnerList jwt={jwt} />
       
      {/* <Login onLoginClick={onLoginClick}/> */}
    </Container>
  </Container> 
}

export default App;
