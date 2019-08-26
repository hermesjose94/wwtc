import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus , faMinus } from "@fortawesome/free-solid-svg-icons"

const Parameters = (
    {
        id,
        pos,
        data,
        name,
        parameters,
        type,
        onChange,
        onClickAdd,
        onClickRemove
    }
    
    
    ) => {
    return(
        <div className="row" id={id}>
            <div className="col-12">
                <hr></hr>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <input 
                            type="text"
                            className="form-control"
                            placeholder="Name param"
                            name={name}
                            data-pos={pos}
                            data-type="1"
                            required="required"
                            value={data[pos].name_param}
                            onChange={onChange}
                    />
                </div>
            </div>  
            <div className="col-5">
                <div className="form-group">
                    <select 
                    className="form-control"
                    name={type}
                    data-pos={pos}
                    data-type="3"
                    required="required"
                    value={data[pos].type}
                    onChange={onChange}
                    >
                        <option value="">Type of value</option>
                        <option value="TEXT">Text</option>
                        <option value="AUDIO">Audio</option>
                        <option value="STATIC">Static Value</option>
                    </select>
                </div>
            </div>  
            <div className="col-5">
                <div className="form-group">
                    <input 
                            type="text"
                            className="form-control"
                            placeholder="Value"
                            name={parameters}
                            data-pos={pos}
                            data-type="2"
                            required="required"
                            value={data[pos].value}
                            onChange={onChange}
                    />
                </div>
            </div>  
            <div className="col-2">
                <button 
                    type="button" 
                    className="btn btn-danger mr-1 float-right"
                    onClick={onClickRemove.bind(this, pos)}
                    tabIndex="-1"
                >
                        <FontAwesomeIcon 
                            icon={faMinus} 
                        />
                </button>
                <button 
                    type="button" 
                    className="btn btn-primary mr-1 float-right"
                    onClick={onClickAdd}
                    tabIndex="-1"
                >
                        <FontAwesomeIcon 
                            icon={faPlus} 
                        />
                </button>
            </div> 
        </div>
    )    
}

export default Parameters