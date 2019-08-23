import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt , faPencilAlt, faEye  } from "@fortawesome/free-solid-svg-icons"

const ActionEndPoint = ({ruta}) => (
    <div>        
        <Link to="/create" className="btn btn-warning mr-1">
            <FontAwesomeIcon icon={faPencilAlt} />
        </Link>    
        <Link to="/" className="btn btn-danger mr-1">
            <FontAwesomeIcon icon={faTrashAlt} />
        </Link>    
        <Link to={ruta} className="btn btn-primary">
            <FontAwesomeIcon icon={faEye} />
        </Link>    
    </div>
)

export default ActionEndPoint