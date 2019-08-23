import React from 'react'
import { Link } from 'react-router-dom'

const AddEndPoint = () => (
    <Link to="/create" className="btn btn-primary float-right">
        New API/Endpoint
    </Link>
)

export default AddEndPoint