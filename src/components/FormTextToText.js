
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faCopy } from "@fortawesome/free-solid-svg-icons"

const FormTextToText = () => (
    <form className="row">
        <div className="col-12 mb-4">
            <h3>Text-to-Text</h3>
        </div>  
        <div className="col-12">
            <div className="form-group">
                <select className="form-control">
                    <option>Select Endpoint</option>
                    <option value="1">Endpoint 1</option>
                    <option value="2">Endpoint 2</option>
                    <option value="3">Endpoint 3</option>
                </select>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <select className="form-control">
                    <option>Select Provider</option>
                    <option value="1">Provider 1</option>
                    <option value="2">Provider 2</option>
                    <option value="3">Provider 3</option>
                </select>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-3 col-form-label">From: <FontAwesomeIcon icon={faFlag} /></label>
                <div className="col-sm-9">
                    <select className="form-control">
                        <option value="1">Spanish</option>
                        <option value="2">English</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <textarea className="form-control" rows="5" id="comment"></textarea>
                <div className="copyTtT text-left">
                    <a href="#"><FontAwesomeIcon icon={faCopy} /> Copy Text to TTS</a>    
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group row">
                <label className="text-left col-sm-3 col-form-label">To: <FontAwesomeIcon icon={faFlag} /></label>
                <div className="col-sm-9">
                    <select className="form-control">
                        <option value="2">English</option>
                        <option value="1">Spanish</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <textarea readOnly className="form-control" rows="5" id="comment"></textarea>
            </div>
        </div>
    </form>

)

export default FormTextToText