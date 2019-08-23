import React from 'react';
import './styles/Navigation.css'
import { Link } from 'react-router-dom'

const Breadcrumb = ({name}) =>(
    <nav aria-label="breadcrumb bg-light">
        <ol className="breadcrumb bg-light">
            <li className="breadcrumb-item">
                <Link to="/">
                    Dashboard
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                {name}
            </li>
        </ol>
    </nav>
)

export default Breadcrumb;