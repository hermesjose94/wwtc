import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormEdit from '../components/FormEdit';

const Edit = ({ match }) => (
    <div className="App">
        <Navigation/>
        <Breadcrumb
            name="Detail of an Endpoint"
        />
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 mb-4">
                    <FormEdit
                        id={match.params.id}
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Edit