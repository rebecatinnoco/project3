import React, {Component, useState} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Button, Container} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.png';

class Initial extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Navbar className="top navbar-dark bg-white px-5" expand="lg">
                
                <NavbarBrand tag={Link} to="/home">
                </NavbarBrand>
                <img src={logo} className="logo" alt="Logo" />.
            </Navbar>
                <Container className="btt">
                    <div>
                        <h3 className="text-white">Welcome to Leader Inventory</h3>
                        <p className="text-white">Log into your account</p>
                        <LoginForm />
                    </div>
                    <Button className="btn btn-info">
                        <Link
                        to="/home"
                        className="nav-link text-white"
                        >LOGIN
                        </Link>
                    </Button>
                    <div>
                        <p className="text-white">New here? <a href="/Register">Create an Account</a></p>
                    </div>
                    <Login />
                </Container>
            </div>
        );
    }
}

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
      <div className="container">
        <Container>
        {!login &&
              <React.Fragment>
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
              
              <Logged fbpic={picture} fbdata={data}/>
              }
        </Container>
      </div>
    );
  }
  
  function LoginForm() {
      return (
        <form className="m-3">
          <input type="text" name="name" placeholder="Login" className="m-1"/>
          <br></br>
          <input type="email" name="email" placeholder="Password"/>
        </form>
      )
    }
    
    function Logged ({fbpic,fbdata}) {
      return (
        <React.Fragment>
        <img src={fbpic} alt={fbdata.name} />
        <h3 className="text-white mx-6">
          Welcome {fbdata.name}!
        </h3>
        <Button className="btn btn-info mt-3 my-auto">
                          <Link
                          to="/inventories"
                          className="nav-link"
                          >Manage Inventory List
                          </Link>
                      </Button>
        </React.Fragment>
      )
    }

export default Initial;