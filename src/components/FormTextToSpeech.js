import React from 'react'
import Config from '../config'

const FormTextToSpeech = ({
    id,
    languages,
    endpoints,
    voices,
    json,
    selectEndpoint,
    fromLanguage,
    handleChangeVoice,
    ChangeText,
    handleSubmit,
    pruebas
}) => {

        var array = endpoints.filter(function (pilot) {
            return pilot.translation_type === "Text to Speech"
        })
        console.log(json);
        
        return(
            <div className="card shadow">
                <div className="card-header py-3 text-left">
                    <h6 className="m-0 font-weight-bold text-primary">Text-to-Speech</h6>
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
                                    data-type="TTS"
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
                            <div className="form-group">
                                {languages.length > 0 ? (
                                    <select 
                                            className="form-control"
                                            value={json.sourcelanguage}
                                            data-type="TTS"
                                            onChange={fromLanguage}
                                        >
                                            <option value="">Select Language</option>
                                            {
                                                languages && languages.map((element,i) => 
                                                    <option value={element.code} key={"TTS-"+i+"-"+element.id}>{element.name}</option>
                                                )
                                            }
                                    </select>
                                ) : (
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Language"
                                        value={json.sourcelanguage}
                                        data-type="TTS"
                                        onChange={fromLanguage}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <select 
                                    className="form-control"
                                    value={json.id_voice}
                                    data-type="TTS"
                                    onChange={handleChangeVoice}
                                >
                                    <option>Select Voice</option>
                                    {
                                        voices && voices.map((element,i) => 
                                            <option value={element.id} key={"TTSV-"+element.id}>{element.name}</option>
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
                        <div className="col-12" id="contentAudio2"></div>
                        <div className="col-12">
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

export default FormTextToSpeech