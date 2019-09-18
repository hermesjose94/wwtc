import React from 'react'
import Navigation from '../components/Navigation';
import Breadcrumb from '../components/Breadcrumb';
import FormTextToText from '../components/FormTextToText';
import FormTextToSpeech from '../components/FormTextToSpeech';
import FormSpeechToText from '../components/FormSpeechToText';



const Edit = ({
    languagesTTT,
    languagesTTS,
    languagesSTT,
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
                        languages={languagesSTT} 
                        endpoints={endpoints}   
                        json={jsonSTT}
                        result={resultSTT}
                        selectEndpoint={selectEndpoint}
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
                        languages={languagesTTT}
                        endpoints={endpoints}
                        json={jsonTTT}
                        result={resultTTT}
                        selectEndpoint={selectEndpoint}
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
                        languages={languagesTTS}
                        voices={voices}
                        endpoints={endpoints}
                        json={jsonTTS}
                        selectEndpoint={selectEndpoint}
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