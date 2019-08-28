import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt , faPencilAlt, faEye  } from "@fortawesome/free-solid-svg-icons"

const ActionEndPoint = ({id,ruta,ruta2,onClick}) => (
    <div className="d-flex justify-content-center">        
        <div className="bd-highlight p-1">
            <Link to={ruta} className="btn btn-warning">
                <FontAwesomeIcon icon={faPencilAlt} />
            </Link>    
        </div>
        <div className="bd-highlight p-1">
            <button 
                type="button"
                className="btn btn-danger"
                onClick={onClick.bind(this, id)}
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>  
        </div>
        <div className="bd-highlight p-1">
            <Link to={ruta2} className="btn btn-primary">
                <FontAwesomeIcon icon={faEye} />
            </Link>    
        </div>
    </div>
)

export default ActionEndPoint