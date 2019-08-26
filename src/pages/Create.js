import React from 'react'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumb'
import FormEndpoint from '../components/FormEndpoint'

const Create = ({
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
    handleChangeJson,
    handleSubmit,
    pruebas
}) => (
        <div className="App">
            <Navigation />
            <Breadcrumb
                name="New API/Endpoint"
            />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h3 className="float-left">New API/Endpoint</h3>   
                    </div>
                    <div className="col-12 mb-4">
                        <FormEndpoint
                            action="Add"
                            arrayHeader={arrayHeader}
                            arrayBody={arrayBody}
                            arrayUrl={arrayUrl}
                            form={form}
                            handleAddHeaderElements={handleAddHeaderElements}
                            handleRemoveHeaderElements={handleRemoveHeaderElements}
                            handleChangeHeader={handleChangeHeader}
                            handleAddBodyElements={handleAddBodyElements}
                            handleRemoveBodyElements={handleRemoveBodyElements}
                            handleChangeBody={handleChangeBody}
                            handleAddUrlElements={handleAddUrlElements}
                            handleRemoveUrlElements={handleRemoveUrlElements}
                            handleChangeUrl={handleChangeUrl}
                            handleChange={handleChange}
                            handleChangeJson={handleChangeJson}
                            handleSubmit={handleSubmit}
                            pruebas={pruebas}
                        />
                    </div>
                </div>
            </div>
        </div>
)

export default Create