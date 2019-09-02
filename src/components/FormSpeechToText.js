import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy , faUpload , faMicrophoneAlt} from "@fortawesome/free-solid-svg-icons"
import Config from '../config'
import './styles/FormSTT.css'
//import  '../recorder'
//import Recorder from 'react-recorder'


const FormSpeechToText = ({
    id,
    languages,
    providers,
    endpoints,
    json,
    result,
    selectEndpoint,
    selectProvider,
    fromLanguage,
    buttonCopy,
    handleChangeFile,
    handleButtonFile,
    startRecording,
    stopRecording,
    handleSubmit,
    pruebas,
}) => {
    var array = endpoints.filter(function (pilot) {
        return pilot.translation_type === "Speech to Text"
    })

    return(
        <div className="card shadow">
            <div className="card-header py-3 text-left">
                <h6 className="m-0 font-weight-bold text-primary">Speech-to-Text</h6>
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
                                data-type="STT"
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
                                data-type="STT"
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
                                data-type="STT"
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
                    <div className="col-6">
                        <div 
                            className="buttonBox"
                            onClick={handleButtonFile}
                        >
                            <div className="form-group border p-4">
                                <FontAwesomeIcon icon={faUpload} size="4x"/>
                                <br></br>
                                <span>File</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div 
                            className="buttonBox microphone"
                            onMouseDown={startRecording}
                            onMouseUp={stopRecording}
                        >
                            <div className="form-group border p-4">
                                <FontAwesomeIcon icon={faMicrophoneAlt} size="4x"/>
                                <br></br>
                                <span>Voice</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12" id="contentAudio">
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <textarea 
                                id="CopySTT"
                                readOnly 
                                className="form-control" 
                                rows="8"
                                defaultValue={result && result.recognizedText}
                                >
                                </textarea>
                        </div>
                        <input 
                            type="file" 
                            className="d-none" 
                            id="fileSTT" 
                            aria-describedby="fileHelp"
                            name="file"
                            onChange={handleChangeFile}/>
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

export default FormSpeechToText