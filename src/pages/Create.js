import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormCreate from '../components/FormCreate';

const Create = ({ match }) => (
    <div className="App">
        <Navigation/>
        <Breadcrumb
            name="New API/Endpoint"
        />
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 mb-4">
                    <h3 className="float-left">New API/Endpoint</h3>   
                </div>
                <div className="col-12 mb-4">
                    <FormCreate/>
                </div>
            </div>
        </div>
    </div>
)

export default Create