import React from 'react'

const TestParameters = ({
        element,
        onChange,
        onChangeFile,
        data,
    }) => {
    if (element.type === "TEXT" ) {
        return(
            <div className="col-12">
                <div className="form-group row">
                    <label className="text-left col-sm-2 col-form-label">{element.name_param} ({element.type})</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            required
                            name={element.name_param}
                            onChange={onChange}
                            defaultValue={data[element.name_param]}
                        /> 
                    </div>
                </div>
            </div>
        )   
    } else if (element.type === "AUDIO"){
        return (
            <div className="col-12">
                <div className="form-group row">
                    <label className="text-left col-sm-2 col-form-label">{element.name_param} ({element.type})</label>
                    <div className="col-sm-10">
                        <div className="custom-file" id="customFile" lang="en">
                            <input type="file" className="custom-file-input" id="exampleInputFile" aria-describedby="fileHelp" name="file" onChange={onChangeFile}/>
                            <label className="custom-file-label" htmlFor="exampleInputFile">
                                Select file...
                            </label>
                        </div>
                        <div id="contentAudio"></div>
                    </div>
                </div>
            </div> 
        )
    }else{
        return(
            <div className="col-12">
                <div className="form-group row">
                    <label className="text-left col-sm-2 col-form-label">{element.name_param} (TEXT)</label>
                    <div className="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder={element.value}
                            readOnly
                        /> 
                    </div>
                </div>
            </div>
        )   
    }
}

export default TestParameters