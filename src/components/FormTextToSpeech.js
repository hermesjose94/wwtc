
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"

const FormTextToSpeech = () => (
    <form className="row">
        <div className="col-12 mb-4">
            <h3>Text-to-Speech</h3>
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
            <div className="form-group">
                <select className="form-control">
                    <option>Select Language</option>
                    <option value="1">Spanish</option>
                    <option value="2">English</option>
                </select>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <select className="form-control">
                    <option>Select Voice</option>
                    <option value="1">Voice 1</option>
                    <option value="2">Voice 2</option>
                </select>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <textarea placeholder="Type here your text..." className="form-control" rows="12" id="comment"></textarea>
                <div className="copyTtT text-left">
                    <a href="#"><FontAwesomeIcon icon={faCopy} /> Copy Audio to STT</a>    
                </div>
            </div>
        </div>
    </form>

)

export default FormTextToSpeech