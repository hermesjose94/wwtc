import React from 'react'
import Config from '../config'

const FormTextToSpeech = ({
    id,
    languages,
    endpoints,
    providers,
    voices,
    json,
    selectEndpoint,
    selectProvider,
    fromLanguage,
    handleChangeVoice,
    ChangeText,
    handleSubmit,
    pruebas
}) => {

        var array = endpoints.filter(function (pilot) {
            return pilot.translation_type === "Text to Speech"
        })
        return(
            <form 
                className="row"
                onSubmit={handleSubmit}
            >
                <div className="col-12 mb-4">
                    <h3>Text-to-Speech</h3>
                </div>  
                <div className="col-12">
                    <div className="form-group">
                        <select 
                            className="form-control"
                            value={id}
                            data-type="TTS"
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
                            value={json.vendor}
                            data-type="TTS"
                            onChange={selectProvider}
                        >
                            <option>Select Provider</option>
                            {
                                providers && providers.map((element,i) => 
                                    <option value={element.code} key={element.code}>{element.name}</option>
                                )
                            }    
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <select 
                                className="form-control"
                                value={json.sourceLanguage}
                                data-type="TTS"
                                onChange={fromLanguage}
                            >
                                <option value="">Select language</option>
                                {
                                    languages && languages.map((element,i) => 
                                        <option value={element.code} key={element.id}>{element.name}</option>
                                    )
                                }
                            </select>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <select 
                            className="form-control"
                            value={json.voice}
                            data-type="TTS"
                            onChange={handleChangeVoice}
                        >
                            <option>Select Voice</option>
                            {
                                voices && voices.map((element,i) => 
                                    <option value={element.code} key={element.code}>{element.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="col-12 mb-1">
                    <div className="form-group">
                        <textarea 
                            placeholder="Type here your text..." 
                            className="form-control" 
                            rows="12"
                            data-type="TTS"
                            value={json.text}
                            onChange={ChangeText}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="col-12">
                    {Config.prueba ? (
                        <button type="button" className="btn btn-dark" onClick={pruebas}>Prueba Json</button>
                    ) : (
                        <button type="button" className="btn btn-dark d-none" onClick={pruebas}>Prueba Json</button>
                    )}
                    <button type="submit" className="btn btn-primary float-right">SEND</button>
                </div> 
            </form>
        )
    }

export default FormTextToSpeech