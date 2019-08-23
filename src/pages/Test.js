import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormTextToText from '../components/FormTextToText';
import FormTextToSpeech from '../components/FormTextToSpeech';
import FormSpeechToText from '../components/FormSpeechToText';



const Edit = ({ match }) => (
    <div className="App">
        <Navigation/>
        <Breadcrumb
            name="Test Endpoint"
        />
        <div className="container mt-4">
            <div className="row">
                <div className="col-4 mb-4 border border-right-0">
                    <FormSpeechToText />
                </div>
                <div className="col-4 mb-4 border border-right-0">
                    <FormTextToText />
                </div>
                <div className="col-4 mb-4 border">
                    <FormTextToSpeech />
                </div>
            </div>
        </div>
    </div>
)

export default Edit