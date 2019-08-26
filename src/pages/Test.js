import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormTextToText from '../components/FormTextToText';
import FormTextToSpeech from '../components/FormTextToSpeech';
import FormSpeechToText from '../components/FormSpeechToText';



const Edit = ({
    languages,
    endpoints,
    json,
    result,
    selectEndpoint,
    selectProvider,
    fromLanguage,
    toLanguage,
    ChangeText,
    handleSubmit,
    pruebas
}) => (
    <div className="App">
        <Navigation/>
        <Breadcrumb
            name="Test Endpoint"
        />
        <div className="container mt-4">
            <div className="row">
                <div className="col-4 mb-4 border border-right-0">
                    <FormSpeechToText 
                        languages={languages}    
                        endpoints={endpoints}
                    />
                </div>
                <div className="col-4 mb-4 border border-right-0">
                    <FormTextToText 
                        languages={languages}
                        endpoints={endpoints}
                        json={json}
                        result={result}
                        selectEndpoint={selectEndpoint}
                        selectProvider={selectProvider}
                        fromLanguage={fromLanguage}
                        toLanguage={toLanguage}
                        ChangeText={ChangeText}
                        handleSubmit={handleSubmit}
                        pruebas={pruebas}
                    />
                </div>
                <div className="col-4 mb-4 border">
                    <FormTextToSpeech 
                        languages={languages}
                        endpoints={endpoints}
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Edit