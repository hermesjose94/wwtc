import React from 'react';
import './styles/Navigation.css'
//import logo from '../images/logo.svg';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom'

const Navigation = ({menu}) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={logo} height="30" width="120" className="d-inline-block align-top" alt="Logo"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item">
                        <Link className={menu === "2" ? 'active nav-link' : 'nav-link'} to="/test">
                            Test
                        </Link>
                    </span>
                    <span className="nav-item">
                        <Link className={menu === "3" ? 'active nav-link' : 'nav-link'} to="/tokens">
                            Tokens
                        </Link>
                    </span>
                    <span className="nav-item">
                        <Link className={menu === "1" ? 'active nav-link' : 'nav-link'} to="/">
                            Dashboard
                        </Link>
                    </span>
                </ul>
            </div>       
        </nav>
    )
}

export default Navigation;