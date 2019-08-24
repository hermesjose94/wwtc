import React from 'react'
import { Link } from 'react-router-dom'
import Parameters from './Parameters'

const FormEndpoint = ({
    arrayHeader,
    arrayBody,
    arrayUrl,
    form,
    handleAddHeaderElements,
    handleRemoveHeaderElements,
    handleChangeHeader,
    handleAddBodyElements,
    handleRemoveBodyElements,
    handleChangeBody,
    handleAddUrlElements,
    handleRemoveUrlElements,
    handleChangeUrl,
    handleChange,
    handleSubmit,
    pruebas
}) => {

    return(
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                placeholder="Name Endpoint"
                                name="name"
                                required="required"
                                value={form.name}
                                onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <select
                        className="form-control" 
                        name="method" 
                        required="required"
                        value={form.method}
                        onChange={handleChange}
                        >
                            <option value="">Method</option>
                            <option value="POST">POST</option>
                            <option value="GET">GET</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <div className="form-group">
                        <select 
                        className="form-control" 
                        name="translation_type" 
                        required="required"
                        value={form.translation_type}
                        onChange={handleChange}
                        >
                            <option value="">Type</option>
                            <option value="Text to Text">TEXT TO TEXT</option>
                            <option value="Speech to Text">SPEECH TO TEXT</option>
                            <option value="Text to Speech">TEXT TO SPEECH</option>
                        </select>
                    </div>
                </div>  
                <div className="col-12">
                    <div className="form-group">
                        <input 
                                type="text"
                                className="form-control"
                                placeholder="URL"
                                name="url"
                                required="required"
                                value={form.url}
                                onChange={handleChange}
                        />
                    </div>
                </div>  
                <div className="col-12">
                    <h5 className="float-left">Header Parameters</h5>
                </div>  
            </div>  
            { arrayHeader.map((element,i) => {
                var nameHeader    = "nameHeader-"+i
                var paramHeader   = "paramHeader-"+i
                var typeHeader    = "typeHeader-"+i
                var elementHeader = "header-element-"+i
                return(
                    <Parameters 
                        key={elementHeader}
                        id={elementHeader}
                        pos={i}
                        data={arrayHeader}
                        name={nameHeader}
                        parameters={paramHeader}
                        type={typeHeader}
                        onClickAdd={handleAddHeaderElements}
                        onClickRemove={handleRemoveHeaderElements}
                        onChange={handleChangeHeader}
                    />
                )
            }) }  
            <div className="row">
                <div className="col-12">
                    <hr></hr>
                </div>
                <div className="col-12">
                    <h5 className="float-left">Body Parameters</h5>
                </div> 
            </div>      
            { arrayBody.map((elemnt,i) => {
                var nameBody    = "nameBody-"+i
                var paramBody   = "paramBody-"+i
                var typeBody    = "typeHeader-"+i
                var bodyElement = "body-element-"+i
                return(
                    <Parameters 
                        key={bodyElement}
                        id={bodyElement}
                        pos={i}
                        data={arrayBody}
                        name={nameBody}
                        parameters={paramBody}
                        type={typeBody}
                        onClickAdd={handleAddBodyElements}
                        onClickRemove={handleRemoveBodyElements}
                        onChange={handleChangeBody}
                    />
                )
            }) }           
            <div className="row">
                <div className="col-12">
                    <hr></hr>
                </div>
                <div className="col-12">
                    <h5 className="float-left">URL Parameters</h5>
                </div> 
            </div>
            { arrayUrl.map((element,i) => {
                var nameUrl    = "nameUrl-"+i
                var paramUrl   = "paramUrl-"+i
                var typeUrl    = "typeUrl-"+i
                var urlElement = "url-element-"+i
                return(
                    <Parameters 
                        key={urlElement}
                        id={urlElement}
                        pos={i}
                        data={arrayUrl}
                        name={nameUrl}
                        parameters={paramUrl}
                        type={typeUrl}
                        onClickAdd={handleAddUrlElements}
                        onClickRemove={handleRemoveUrlElements}
                        onChange={handleChangeUrl}
                    />
                )
            }) }           
            <div className="row">
                <div className="col-12">
                    <hr></hr>
                </div>
                <div className="col-12">
                    <h5 className="float-left">Output</h5>
                </div> 
                <div className="col-12">
                    <div className="form-group">
                        <textarea 
                            placeholder="Json"
                            className="form-control"
                            rows="5"
                            name="output">
                        </textarea>
                    </div>
                </div>  
                <div className="col-12">
                    <hr></hr>
                </div>
                <div className="col-12">
                    <Link to="/" className="btn btn-danger float-left">Cancel</Link>
                    <button onClick={pruebas} type="button" className="btn btn-dark">Prueba</button>
                    <button type="submit" className="btn btn-primary float-right">Add API/Endpoint</button>
                </div> 
            </div> 
        </form>
    )
}

export default FormEndpoint