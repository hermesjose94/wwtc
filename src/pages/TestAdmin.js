import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormTest from '../components/FormTest';

const Edit = ({
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
    }) => (
    <div className="App">
        <Navigation/>
        <Breadcrumb
            name="Test Endpoint"
        />
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-body row">
                    <div className="col-12 mb-4">
                        <FormTest
                            id={id}
                            ruta={ruta}
                            form={form}
                            data={data}
                            arrayHeader={arrayHeader}
                            arrayBody={arrayBody}
                            arrayUrl={arrayUrl}
                            arrayResult={arrayResult}
                            onClick={onClick}
                            onChange={onChange}
                            onChangeFile={onChangeFile}
                            onSubmit={onSubmit}
                            pruebas={pruebas}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Edit