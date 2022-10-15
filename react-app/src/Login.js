import './App.css';
import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./Navbar"
import { Button} from "reactstrap";
import { Link } from "react-router-dom";



function Login() {
  const [login, setLogin] = useState(false);
  const [data,setData] = useState({});
  const[picture,setPicture] = useState('');
  
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div class="container">
      <AppNavbar />
      <Card style={{width:'400px'}} className="mx-auto mt-5">
        <Card.Body>
          <Card.Text>
            {!login &&
            <React.Fragment>
            <h3>Please login using one of the following:</h3>
            {/* Login Form */}
            <LoginForm />
            {/* FB Login Button */}
            <FacebookLogin 
              appId="477948517721492"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            />
            </React.Fragment>  
            }
            {login &&
            <Home fbpic={picture} fbdata={data}/>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function LoginForm() {
    return (
      <form className="border mt-3 mb-5 p-3 bg-white">
        <label className="m-2">Name:</label>
        <input type="text" name="name" placeholder="Your name"/>
        <label className="m-2">Email:</label>
        <input type="email" name="email" placeholder="Your email"/>
        <input type="submit" value="Login" className="btn bg-success text-white my-3"/>
      </form>
    )
  }
  
  function Home ({fbpic,fbdata}) {
    return (
      <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome {fbdata.name}!
      </h3>
      <Button className="btn btn-danger mt-3 my-auto">
                        <Link
                        to="/inventories"
                        className="nav-link"
                        >Manage Inventory List
                        </Link>
                    </Button>
      </React.Fragment>
    )
  }

export default Login;