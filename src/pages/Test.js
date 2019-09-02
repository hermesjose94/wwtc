import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormTextToText from '../components/FormTextToText';
import FormTextToSpeech from '../components/FormTextToSpeech';
import FormSpeechToText from '../components/FormSpeechToText';



const Edit = ({
    languages,
    providers,
    voices,
    endpoints,
    idTTT,
    jsonTTT,
    resultTTT,
    idTTS,
    jsonTTS,
    idSTT,
    jsonSTT,
    resultSTT,
    selectEndpoint,
    selectProvider,
    fromLanguage,
    toLanguage,
    handleChangeVoice,
    ChangeText,
    handleChangeFile,
    handleButtonFile,
    buttonCopyTTT,
    buttonCopySTT,
    startRecording,
    stopRecording,
    handleSubmitTTT,
    handleSubmitTTS,
    handleSubmitSTT,
    pruebas
}) => (
    <div className="App background-image">
        <Navigation
            menu="2"
        />
        <Breadcrumb
            name="Test Endpoint"
        />
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm mb-4">
                    <FormSpeechToText 
                        id={idSTT}
                        languages={languages} 
                        providers={providers}
                        endpoints={endpoints}   
                        json={jsonSTT}
                        result={resultSTT}
                        selectEndpoint={selectEndpoint}
                        selectProvider={selectProvider}
                        fromLanguage={fromLanguage}
                        handleChangeFile={handleChangeFile}
                        handleButtonFile={handleButtonFile}
                        buttonCopy={buttonCopySTT}
                        startRecording={startRecording}
                        stopRecording={stopRecording}
                        handleSubmit={handleSubmitSTT}
                        pruebas={pruebas}
                    />
                </div>
                <div className="col-sm mb-4">
                    <FormTextToText 
                        id={idTTT}
                        languages={languages}
                        providers={providers}
                        endpoints={endpoints}
                        json={jsonTTT}
                        result={resultTTT}
                        selectEndpoint={selectEndpoint}
                        selectProvider={selectProvider}
                        fromLanguage={fromLanguage}
                        toLanguage={toLanguage}
                        ChangeText={ChangeText}
                        buttonCopy={buttonCopyTTT}
                        handleSubmit={handleSubmitTTT}
                        pruebas={pruebas}
                    />
                </div>
                <div className="col-sm mb-4">
                    <FormTextToSpeech 
                        id={idTTS}
                        languages={languages}
                        providers={providers}
                        voices={voices}
                        endpoints={endpoints}
                        json={jsonTTS}
                        selectEndpoint={selectEndpoint}
                        selectProvider={selectProvider}
                        fromLanguage={fromLanguage}
                        handleChangeVoice={handleChangeVoice}
                        ChangeText={ChangeText}
                        handleSubmit={handleSubmitTTS}
                        pruebas={pruebas}
                    />
                </div>
            </div>
        </div>
    </div>
)

export default Edit