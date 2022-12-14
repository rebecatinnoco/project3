import React, {Component} from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './logo.png';

export default class AppNavbar extends Component {
    render() {
        return (
            <Navbar className="top navbar-dark bg-white px-5" expand="lg">
                
                <NavbarBrand tag={Link} to="/">
                <FontAwesomeIcon icon={faAnglesLeft} className="fas fa-lg" />
                </NavbarBrand>
                <img src={logo} className="logo" alt="Logo" />.
            </Navbar>
        )
    }
}




