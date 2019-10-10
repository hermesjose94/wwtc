import React from 'react'
import { Link } from 'react-router-dom'
import Parameter from '../components/TestParameters'
import Config from '../config'

const FormTest = ({
    id,
    ruta,
    form,
    data,
    arrayHeader,
    arrayBody,
    arrayUrl,
    arrayResult,
    onClick,
    onChange,
    onChangeFile,
    onSubmit,
    pruebas
}) => {

    return(
        <form className="row" onSubmit={onSubmit}>
            <div className="col-12 mb-4">
                <h3 className="float-left">{form.name}</h3>
                <button
                    type="button"
                    className="btn btn-danger float-right"
                    onClick={onClick.bind(this, id)}
                >
                    DELETE
                </button>    
                <Link to={ruta} className="btn btn-primary float-right mr-1">
                    EDIT
                </Link>    
            </div>  
            <div className="col-12">
                <hr></hr>
                {arrayHeader ? (
                    <h5 className="float-left">Header Parameters</h5>
                ) : (
                    <h5 className="float-left">Not Header Parameters</h5>
                )}
            </div> 
            { 
                arrayHeader && arrayHeader.map((element,i) => {
                    var elementHeader = "header-element-"+i
                    return(
                        <Parameter
                            key={elementHeader}
                            element={element}
                            onChange={onChange}
                            data={data}
                            onChangeFile={onChangeFile}
                        />
                    )
                }) 
            }    
            <div className="col-12">
                <hr></hr>
                {arrayBody ? (
                    <h5 className="float-left">Body Parameters</h5>
                ) : (
                    <h5 className="float-left">Not Body Parameters</h5>
                )}
            </div>
            { 
                arrayBody && arrayBody.map((element,i) => {
                    var elementHeader = "body-element-"+i
                    return(
                        <Parameter
                            key={elementHeader}
                            element={element}
                            onChange={onChange}
                            data={data}
                            onChangeFile={onChangeFile}
                        />
                    )
                }) 
            }    
            <div className="col-12">
                <hr></hr>
                {arrayUrl ? (
                    <h5 className="float-left">URL Parameters</h5>
                ) : (
                    <h5 className="float-left">Not URL Parameters</h5>
                )}
            </div>
            { 
                arrayUrl && arrayUrl.map((element,i) => {
                    var elementHeader = "url-element-"+i
                    return(
                        <Parameter
                            key={elementHeader}
                            element={element}
                            onChange={onChange}
                            data={data}
                            onChangeFile={onChangeFile}
                        />
                    )
                }) 
            }    
            <div className="col-12">
                <hr></hr>
                {arrayResult ? (
                    <h5 className="float-left">Results</h5>
                ) : (
                    <h5 className="float-left">Not Results</h5>
                )}                
            </div>
            
            {arrayResult && 
                <div className="col-12">
                    {form.translation_type ===  "Text to Text" || form.translation_type ===  "Speech to Text"  ? (
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
                                        <td>{arrayResult.vendor || arrayResult.acoustic_model}</td>
                                        <td>Text</td>
                                        <td>{arrayResult.targetText || arrayResult.recognizedText || arrayResult.text}</td>
                                    </tr>
                                
                            </tbody>
                        </table>
                    ) : (
                        <div className="col-12" id="contentAudio"></div>
                    )}                
                </div>
            }
            <div className="col-12">
                <hr></hr>
                <h5 className="float-left">Description</h5>
            </div> 
            <div className="col-12">
                <div className="form-group">
                    <textarea 
                        readOnly
                        className="form-control"
                        rows="5"
                        name="description"
                        defaultValue={form.description}
                    >
                    </textarea>
                </div>
            </div>  
            <div className="col-12">
                <hr></hr>
                <h5 className="float-left">Output</h5>
            </div> 
            <div className="col-12">
                <div className="form-group">
                    <textarea 
                        readOnly
                        className="form-control"
                        rows="5"
                        name="output"
                        defaultValue={JSON.parse(form.output)}
                    >
                    </textarea>
                </div>
            </div>  
            <div className="col-12">
                <hr></hr>
                <Link to="/" className="btn btn-danger float-left">Cancel</Link>
                {Config.prueba ? (
                        <button type="button" className="btn btn-dark" onClick={pruebas}>Prueba Json</button>
                    ) : (
                        <button type="button" className="btn btn-dark d-none" onClick={pruebas}>Prueba Json</button>
                )}
                <button type="submit" className="btn btn-primary float-right">Test Endpoint</button>
            </div> 
        </form>
    )
}

export default FormTest