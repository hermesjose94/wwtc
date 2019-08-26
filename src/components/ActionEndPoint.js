import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt , faPencilAlt, faEye  } from "@fortawesome/free-solid-svg-icons"

const ActionEndPoint = ({id,ruta,ruta2,onClick}) => (
    <div>        
        <Link to={ruta} className="btn btn-warning mr-1">
            <FontAwesomeIcon icon={faPencilAlt} />
        </Link>    
        <button 
            type="button"
            className="btn btn-danger mr-1"
            onClick={onClick.bind(this, id)}
        >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>  
        <Link to={ruta2} className="btn btn-primary">
            <FontAwesomeIcon icon={faEye} />
        </Link>    
    </div>
)

export default ActionEndPoint