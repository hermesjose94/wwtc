import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faCopy } from "@fortawesome/free-solid-svg-icons"
import Config from '../config'

const FormTextToText = ({
    id,
    languages,
    endpoints,
    json,
    result,
    selectEndpoint,
    fromLanguage,
    toLanguage,
    ChangeText,
    buttonCopy,
    handleSubmit,
    pruebas
}) => {
        var array = endpoints.filter(function (pilot) {
            return pilot.translation_type === "Text to Text"
        })
        return(
            <div className="card shadow">
                <div className="card-header py-3 text-left">
                  <h6 className="m-0 font-weight-bold text-primary">Text-to-Text</h6>
                </div>
                <div className="card-body">
                    <form 
                        className="row"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-12">
                            <div className="form-group">
                                <select 
                                    className="form-control"
                                    value={id}
                                    data-type="TTT"
                                    onChange={selectEndpoint}
                                >   
                                    <option>Select Providers</option>
                                    {
                                        array && array.map((element,i) => 
                                            <option value={element.id} key={element.id}>{element.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <label className="text-left col-sm-4 col-form-label">
                                    From: <FontAwesomeIcon icon={faFlag} />
                                </label>
                                <div className="col-sm-8">
                                    {languages.length > 0 ? (
                                        <select 
                                            className="form-control"
                                            value={json.sourceLanguage && ''}
                                            data-type="TTT"
                                            onChange={fromLanguage}
                                        >
                                            <option value="">Select Language</option>
                                            {
                                                languages && languages.map((element,i) => 
                                                    <option value={element.code} key={"TTT_F-"+i+"-"+element.id}>{element.name +"( "+element.code+" )"}</option>
                                                )
                                            }
                                        </select>
                                    ) : (
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Language"
                                            value={json.sourceLanguage}
                                            data-type="TTT"
                                            onChange={fromLanguage}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    value={json.Text}
                                    data-type="TTT"
                                    onChange={ChangeText}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group row">
                                <label className="text-left col-sm-4 col-form-label">
                                    To: <FontAwesomeIcon icon={faFlag} />
                                </label>
                                <div className="col-sm-8">
                                    {languages.length > 0 ? (
                                            <select 
                                                className="form-control"
                                                data-type="TTT"
                                                value={json.targetLanguage}
                                                onChange={toLanguage}
                                            >
                                                <option value="">Select Language</option>
                                                {
                                                    languages && languages.map((element,i) => 
                                                        <option value={element.code} key={"TTT_T-"+i+"-"+element.id}>{element.name +"( "+element.code+" )"}</option>
                                                    )
                                                }
                                            </select>
                                        ) : (
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="Language"
                                                data-type="TTT"
                                                value={json.targetLanguage}
                                                onChange={toLanguage}
                                            />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <textarea 
                                    id="CopyTTT"
                                    readOnly 
                                    className="form-control" 
                                    rows="6"
                                    defaultValue={result && result.targetText}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <button 
                                type="button"
                                className="btn btn-light float-left"
                                onClick={buttonCopy}
                            >
                                <FontAwesomeIcon icon={faCopy} /> Copy
                            </button>
                            {Config.prueba ? (
                                <button type="button" className="btn btn-dark" onClick={pruebas}>Prueba Json</button>
                            ) : (
                                <button type="button" className="btn btn-dark d-none" onClick={pruebas}>Prueba Json</button>
                            )}
                            <button type="submit" className="btn btn-primary float-right">SEND</button>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }

export default FormTextToText