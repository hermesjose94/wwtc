import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faCopy } from "@fortawesome/free-solid-svg-icons"

const FormTextToText = ({
    languages,
    endpoints,
    json,
    result,
    selectEndpoint,
    selectProvider,
    fromLanguage,
    toLanguage,
    ChangeText,
    handleSubmit,
    pruebas
}) => {
        var array = endpoints.filter(function (pilot) {
            return pilot.translation_type === "Text to Text"
        })
        return(
            <form 
                className="row"
                onSubmit={handleSubmit}
            >
                <div className="col-12 mb-4">
                    <h3>Text-to-Text</h3>
                </div>  
                <div className="col-12">
                    <div className="form-group">
                        <select 
                            className="form-control"
                            onChange={selectEndpoint}
                        >
                            <option>Select Endpoint</option>
                            {
                                array && array.map((element,i) => 
                                    <option value={element.id} key={element.id}>{element.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <select 
                            className="form-control"
                            onChange={selectProvider}
                        >
                            <option>Select Provider</option>
                            <option value="google">GOOGLE</option>
                            <option value="microsoft">MICROSOFT</option>
                            <option value="SDL">SDL</option>
                            <option value="systran">SYSTRAN</option>
                            <option value="baidu">BAIDU</option>
                            <option value="yandex">YANDEX</option>
                            
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group row">
                        <label className="text-left col-sm-3 col-form-label">From: <FontAwesomeIcon icon={faFlag} /></label>
                        <div className="col-sm-9">
                            <select 
                                className="form-control"
                                onChange={fromLanguage}
                            >
                                <option value="">Select option</option>
                                {
                                    languages && languages.map((element,i) => 
                                        <option value={element.code} key={element.id}>{element.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            onChange={ChangeText}
                            value={json.Text}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group row">
                        <label className="text-left col-sm-3 col-form-label">To: <FontAwesomeIcon icon={faFlag} /></label>
                        <div className="col-sm-9">
                            <select 
                                className="form-control"
                                onChange={toLanguage}
                            >
                                <option value="">Select option</option>
                                {
                                    languages && languages.map((element,i) => 
                                        <option value={element.code} key={element.id}>{element.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <textarea 
                            readOnly 
                            className="form-control" 
                            rows="5"
                            defaultValue={result && result.targetText}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="col-12">
                    <Link to="/" className="btn btn-danger float-left"><FontAwesomeIcon icon={faCopy} /> Copy</Link>
                    <button type="button" className="btn btn-dark d-none" onClick={pruebas}>Prueba Json</button>
                    <button type="submit" className="btn btn-primary float-right">SEND</button>
                </div> 
            </form>
        )
    }

export default FormTextToText