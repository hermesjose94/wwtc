import React,{ useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Config from '../config'
import Test from './Test'

const TestContainer = () => {
    
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ languages, setLanguages ] = useState()
    const [ endpoints, setEndpoints ] = useState()
    const [ providers ] = useState(
                                                [
                                                    {'name': 'GOOGLE','code':'google'},
                                                    {'name': 'MICROSOFT','code':'microsoft'},
                                                    {'name': 'SDL','code':'SDL'},
                                                    {'name': 'SYSTRAN','code':'systran'},
                                                    {'name': 'BAIDU','code':'baidu'},
                                                    {'name': 'YANDEX','code':'yandex'},
                                                    {'name': 'READ SPEAKER','code':'ReadSpeaker'}
                                                ]
                                            )
    const [ voices ] = useState(
                                            [
                                                {'name': 'HUI','code':'hui'},
                                            ]
                                        )
    const [ idTTT, setIdTTT ] = useState()
    const [ idTTS, setIdTTS ] = useState()
    const [ idSTT, setIdSTT ] = useState()
    const [ resultTTT, setResultTTT ] = useState()
    const [ resultSTT, setResultSTT ] = useState()
    const [ jsonTTT,setJsonTTT ] = useState({
                                        'Authorization': '',
                                        'Text':'',
                                        'sourceLanguage':'',
                                        'targetLanguage':'',
                                        'vendor':''
                                    })
    const [ jsonTTS,setJsonTTS ] = useState({
                                        'text':'',
                                        'sourcelanguage':'',
                                        'voice':'',
                                        'vendor':''
                                    })
    const [ jsonSTT,setJsonSTT ] = useState({
                                        'file':'',
                                        'sourceLanguage':'',
                                        'vendor':''
                                    })
                                
    var URL = window.URL || window.webkitURL

    var gumStream
    var rec
    var input

    var AudioContext = window.AudioContext || window.webkitAudioContext
    var audioContext      
    var startTime
    var endTime                  

    useEffect(() =>{
        const fetchResource = async () => {
            try {
                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }

                let config ={
                    method: 'GET',
                    headers:headers,
                }

                let res = await fetch(`${Config.url}/languages`,config)
                let data = await res.json()
                setLanguages(data.languages)

                let res2 = await fetch(`${Config.url}/apis`)
                let data2 = await res2.json()
                setEndpoints(data2.apis)
                
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    },[])

    const selectEndpoint = e => {
        var id = parseInt(e.target.value)
        
        if (e.target.dataset.type === "TTT"){
            setIdTTT(id)
        }else if (e.target.dataset.type === "TTS"){
            setIdTTS(id)
        }else if (e.target.dataset.type === "STT"){
            setIdSTT(id)
        }
        
    }

    const selectProvider = e =>{
        if (e.target.dataset.type === "TTT"){
            setJsonTTT({
                ...jsonTTT,"vendor" : e.target.value
            })
        }else if (e.target.dataset.type === "TTS"){
            setJsonTTS({
                ...jsonTTS,"vendor" : e.target.value
            })
        }else if (e.target.dataset.type === "STT"){
            setJsonSTT({
                ...jsonSTT,"vendor" : e.target.value
            })
        }
    }

    const fromLanguage = e =>{
        if (e.target.dataset.type === "TTT"){
            setJsonTTT({
                ...jsonTTT,"sourceLanguage" : e.target.value
            })
        }else if (e.target.dataset.type === "TTS"){
            setJsonTTS({
                ...jsonTTS,"sourcelanguage" : e.target.value
            })
        }else if (e.target.dataset.type === "STT"){
            setJsonSTT({
                ...jsonSTT,"sourceLanguage" : e.target.value
            })
        }
    }

    const toLanguage = e =>{
        setJsonTTT({
            ...jsonTTT,"targetLanguage" : e.target.value
        })
    }

    const handleChangeVoice = e =>{
        if (e.target.dataset.type === "TTS"){
            setJsonTTS({
                ...jsonTTS,"voice" : e.target.value
            })
        }
    }

    const handleChangeText = e =>{

        if (e.target.dataset.type === "TTT"){
            setJsonTTT({
                ...jsonTTT,"Text" : e.target.value
            })
        }else if (e.target.dataset.type === "TTS"){
            setJsonTTS({
                ...jsonTTS,"text" : e.target.value
            })
        }   
    }

    const handleChangeFile = e => {
        console.log("CARGAR FILE")
        var file = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            setJsonSTT({
                ...jsonSTT,"file" : reader.result.substring(22)
            })
        }
        reader.onerror = function (error) {
            console.log('Error: ', error)
        } 
    }

    const handleButtonFile = e => {
        document.getElementById('fileSTT').click()
    }

    const buttonCopyTTT = e => {
        console.log("Copiar TTT")
        var textarea = document.getElementById("CopyTTT")
        textarea.select()
        try {
            var successful = document.execCommand('copy')
            if(successful) console.log("copiado")
            else console.log("no copiado")
        } catch (err) {
            console.log(err)   
        }
    }

    const buttonCopySTT = e => {
        console.log("Copiar STT")
        var textarea = document.getElementById("CopySTT")
        textarea.select()
        try {
            var successful = document.execCommand('copy')
            if(successful) console.log("copiado")
            else console.log("no copiado")
        } catch (err) {
            console.log(err)   
        }
    }

    const startRecording = () => {
        console.log("recordButton clicked")
        startTime = new Date()
        console.log("Estoy presionado, haz lo que necesites...")
        var constraints = { audio: true, video:false }
        navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
            console.log("getUserMedia() success, stream created, initializing Recorder.js ...")            
            audioContext = new AudioContext()
            console.log("Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz")
            gumStream = stream
            input = audioContext.createMediaStreamSource(stream)
            rec = new window.Recorder(input,{numChannels:1})
            rec.record()
		    console.log("Recording started")
        }).catch(function(err) {
            console.log(err);
      })
    }

    const stopRecording = () => {
        endTime = new Date()
        var timeDiff = endTime - startTime //en ms
        console.log("Se hizo clic:\n" + startTime)
        console.log("Se levantó el clic:\n" + endTime)
        console.log("Tiempo transcurrido:\n" + timeDiff + " ms")
        console.log("stopButton clicked")
        rec.stop()
        //stop microphone access
        gumStream.getAudioTracks()[0].stop()
        //create the wav blob and pass it on to createDownloadLink
        rec.exportWAV(createDownloadLink)
    }

    function createDownloadLink(blob) {
        console.log(blob)
        //var zone = document.getElementById("contentAudio")
        //var url = URL.createObjectURL(blob)
        //var au = document.createElement('audio')
        //add controls to the <audio> element
        //au.controls = true
        //au.src = url
        //zone.appendChild(au)
        var reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = function () {
            console.log("MIRAR AUDIOOOOO")
            console.log(reader.result)
            setJsonSTT({
                ...jsonSTT,"file" : reader.result.substring(22)
            })
        }
        reader.onerror = function (error) {
            console.log('Error: ', error)
        } 
    }

    const handleSubmitTTT = async e => {
        console.log("TTT")
        setLoading(true)
        e.preventDefault()
        try {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
            let config ={
                method: 'POST',
                headers:headers,
                body: JSON.stringify(jsonTTT)
            }
            let res  = await fetch(`${Config.url}/apis/${idTTT}/test`, config)
            let data = await res.json()
            setResultTTT(data)  
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handleSubmitTTS = async e => {
        console.log("TTS")
        setLoading(true)
        e.preventDefault()
        try {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
            let config ={
                method: 'POST',
                headers:headers,
                body: JSON.stringify(jsonTTS)
            }
            let res  = await fetch(`${Config.url}/apis/${idTTS}/test`, config)
            let data = await res.json()
            console.log("entro")
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            /*if (error != "TypeError: Failed to fetch" || error != 'TypeError: "NetworkError when attempting to fetch resource." TestContainer.') {
                setError(error)    
            }*/
        }
    }

    const handleSubmitSTT = async e => {
        console.log("STT")
        setLoading(true)
        e.preventDefault()
        try {
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
            let config ={
                method: 'POST',
                headers:headers,
                body: JSON.stringify(jsonSTT)
            }
            let res  = await fetch(`${Config.url}/apis/${idSTT}/test`, config)
            let data = await res.json()
            console.log(data);
            
            setResultSTT(data)  
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    
    const pruebas = () => {
        
        console.log("JSON TTT...........")
        console.log(jsonTTT)
        console.log("JSON TTS...........")
        console.log(jsonTTS)
        console.log("JSON STT...........")
        console.log(jsonSTT)
    }

    if(loading)
    return <Loading />

    if(error)
        return <FatalError />    

    return (
        <Test
            languages={languages}
            providers={providers}
            voices={voices}
            endpoints={endpoints}
            idTTT={idTTT}
            jsonTTT={jsonTTT}
            resultTTT={resultTTT}
            idTTS={idTTS}
            jsonTTS={jsonTTS}
            idSTT={idSTT}
            jsonSTT={jsonSTT}
            resultSTT={resultSTT}
            selectEndpoint={selectEndpoint}
            selectProvider={selectProvider}
            fromLanguage={fromLanguage}
            toLanguage={toLanguage}
            handleChangeVoice={handleChangeVoice}
            ChangeText={handleChangeText}
            handleChangeFile={handleChangeFile}
            handleButtonFile={handleButtonFile}
            buttonCopyTTT={buttonCopyTTT}
            buttonCopySTT={buttonCopySTT}
            startRecording={startRecording}
            stopRecording={stopRecording}
            handleSubmitTTT={handleSubmitTTT}
            handleSubmitTTS={handleSubmitTTS}
            handleSubmitSTT={handleSubmitSTT}
            pruebas={pruebas}
        />
    )
}

export default TestContainer