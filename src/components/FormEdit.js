import React from 'react'
import { Link } from 'react-router-dom'
import DropZone2 from '../components/DropZone2';

import audio from './audio.mp3';

const FormEdit = ({id}) => (
    <form className="row">
        <div className="col-12 mb-4">
            <h3 className="float-left">Sample Endpoint {id}</h3>
            <Link to="/" className="btn btn-danger float-right">
                DELETE
            </Link>    
            <Link to="/create" className="btn btn-primary float-right mr-1">
                EDIT
            </Link>    
        </div>  
        <div className="col-12">
            <h5 className="float-left">Header Parameters</h5>
        </div>  
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-2 col-form-label">Header</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue="Header Value"/> 
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-2 col-form-label">Value 1 (text)</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue="Value 1"/> 
                </div>
            </div>
        </div>
        <div className="col-12">
            <h5 className="float-left">Body Parameters</h5>
        </div>
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-2 col-form-label">Value 1 (text)</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" defaultValue="Value 1"/> 
                </div>
            </div>
        </div> 
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-2 col-form-label">Value 2 (audio)</label>
                <div className="col-sm-10">
                    <DropZone2 
                        
                    />
                </div>
            </div>
        </div> 
        <div className="col-12">
            <h5 className="float-left">Output Parameters</h5>
        </div>
        <div className="col-12">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sample</td>
                        <td>Text</td>
                        <td>Lorem ipsum dolor sit amet</td>
                    </tr>
                    <tr>
                        <td>Value 3</td>
                        <td>Audio</td>
                        <td>
                            <a target="_blank" href={audio}>Audio</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-12">
            <Link to="/" className="btn btn-danger float-left">Cancel</Link>
            <Link to="/test" className="btn btn-primary float-right">Test Endpoint</Link>
        </div> 
    </form>

)

export default FormEdit