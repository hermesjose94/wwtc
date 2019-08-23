import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt , faPencilAlt  } from "@fortawesome/free-solid-svg-icons"

const ActionEndPoint = ({ruta}) => (
    <div>        
        <Link to={ruta} className="btn btn-warning mr-1">
            <FontAwesomeIcon icon={faPencilAlt} />
        </Link>    
        <Link to="/" className="btn btn-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
        </Link>    
    </div>
)

export default ActionEndPoint