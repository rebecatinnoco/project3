import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
//import FacebookLogin from 'react-facebook-login';

class Home extends Component {
    
    render() {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200) {
                const user = JSON.parse(req.response).user;
                document.getElementById("welcome-message").innerText = `Welcome ${user.username}!`;
            }
        };
        req.open("GET", "http://localhost:3000/user", true);
        req.send();
        return (
            <div>
                <AppNavbar />
                {/* <Container fluid className="btt"> */}
                <Card className="btt border border-3 mx-10">
                <h1 id="welcome-message">Welcome</h1>
                    <Button className="btn btn-info">
                        <Link
                        to="/inventories"
                        className="nav-link"
                        >Manage Inventory List
                        </Link>
                    </Button>
                    <Button className="btn btn-info">
                        <Link
                        to="/initial"
                        className="nav-link"
                        >Logout
                        </Link>
                    </Button>
                </Card>
            </div>
        );
    }
}


export default Home;