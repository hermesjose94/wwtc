import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const FormCreate = () => (
    <form className="row">
        <div className="col-4">
            <div className="form-group">
                <select className="form-control">
                    <option>Select an API</option>
                    <option value="1">Sample Endpoint 1</option>
                    <option value="2">Sample Endpoint 2</option>
                    <option value="3">Sample Endpoint 3</option>
                    <option value="4">Sample Endpoint 4</option>
                    <option value="5">Sample Endpoint 5</option>
                </select>
            </div>
        </div>
        <div className="col-4">
            <div className="form-group">
                <select className="form-control">
                    <option>Method</option>
                    <option value="1">Post</option>
                    <option value="2">Get</option>
                    <option value="3">Put</option>
                    <option value="4">Delete</option>
                </select>
            </div>
        </div>
        <div className="col-4">
            <div className="form-group">
                <select className="form-control">
                    <option>Type</option>
                    <option value="1">Text-to-Text</option>
                    <option value="2">Speech-to-Text</option>
                    <option value="3">Text-to-Speech</option>
                </select>
            </div>
        </div>  
        <div className="col-12">
            <div className="form-group">
                <input 
                        type="text"
                        className="form-control"
                        id="url"
                        placeholder="URL"
                />
            </div>
        </div>  
        <div className="col-12">
            <h5 className="float-left">Header Parameters</h5>
        </div>  
        <div className="col-12">
            <div className="form-group">
                <input 
                        type="text"
                        className="form-control"
                        id="header"
                        placeholder="Header"
                />
            </div>
        </div>  
        <div className="col-6">
            <div className="form-group">
                <input 
                        type="text"
                        className="form-control"
                        id="parameter"
                        placeholder="Parameter"
                />
            </div>
        </div>  
        <div className="col-5">
            <div className="form-group">
                <select className="form-control">
                    <option>Type of value</option>
                    <option value="1">Text</option>
                    <option value="2">Audio</option>
                    <option value="3">Static Value</option>
                </select>
            </div>
        </div>  
        <div className="col-1">
            <Link to="/" className="btn btn-primary mr-1 float-right">
                <FontAwesomeIcon icon={faPlus} />
            </Link>    
        </div>  
        <div className="col-12">
            <h5 className="float-left">Body Parameters</h5>
        </div> 
        <div className="col-6">
            <div className="form-group">
                <input 
                        type="text"
                        className="form-control"
                        id="parameter"
                        placeholder="Parameter"
                />
            </div>
        </div>  
        <div className="col-5">
            <div className="form-group">
                <select className="form-control">
                    <option>Type of value</option>
                    <option value="1">Text</option>
                    <option value="2">Audio</option>
                    <option value="3">Static Value</option>
                </select>
            </div>
        </div>  
        <div className="col-1">
            <Link to="/" className="btn btn-primary mr-1 float-right">
                <FontAwesomeIcon icon={faPlus} />
            </Link>    
        </div>   
        <div className="col-12">
            <h5 className="float-left">Output Parameters</h5>
        </div> 
        <div className="col-6">
            <div className="form-group">
                <input 
                        type="text"
                        className="form-control"
                        id="parameter"
                        placeholder="Parameter"
                />
            </div>
        </div>  
        <div className="col-5">
            <div className="form-group">
                <select className="form-control">
                    <option>Type of value</option>
                    <option value="1">Text</option>
                    <option value="2">Audio</option>
                    <option value="3">Static Value</option>
                </select>
            </div>
        </div>  
        <div className="col-1">
            <Link to="/" className="btn btn-primary mr-1 float-right">
                <FontAwesomeIcon icon={faPlus} />
            </Link>    
        </div>   
        <div className="col-12">
            <Link to="/" className="btn btn-danger float-left">Cancel</Link>
            <button type="submit" className="btn btn-primary float-right">Add API/Endpoint</button>
        </div> 
    </form>

)

export default FormCreate