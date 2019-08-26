import React from 'react';
import './styles/Navigation.css'
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom'

const Navigation = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
            <img src={logo} width="30" height="30" className="App-logo d-inline-block align-top" alt="Logo"></img>
            LOGO
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <span className="nav-item">
                    <Link className="active nav-link" to="/">
                        Dashboard
                    </Link>
                </span>
            </ul>
        </div>       
    </nav>
)

export default Navigation;