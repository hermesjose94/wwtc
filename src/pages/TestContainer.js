import React,{ useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Config from '../config'
import Test from './Test'

const TestContainer = () => {
    
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ endpoints, setEndpoints ] = useState()
    const [ voices ] = useState(
                                            [
                                                {
                                                    "id": 1,
                                                    "name": 'HUI',
                                                    "ShortName": "HUI",
                                                    "Gender": "Female",
                                                    "code":'hui'
                                                },
                                                {
                                                    "id": 2,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ar-EG, Hoda)",
                                                    "ShortName": "ar-EG-Hoda",
                                                    "Gender": "Female",
                                                    "code": "ar-EG"
                                                },
                                                {
                                                    "id": 3,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ar-SA, Naayf)",
                                                    "ShortName": "ar-SA-Naayf",
                                                    "Gender": "Male",
                                                    "code": "ar-SA"
                                                },
                                                {
                                                    "id": 4,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (bg-BG, Ivan)",
                                                    "ShortName": "bg-BG-Ivan",
                                                    "Gender": "Male",
                                                    "code": "bg-BG"
                                                },
                                                {
                                                    "id": 5,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ca-ES, HerenaRUS)",
                                                    "ShortName": "ca-ES-HerenaRUS",
                                                    "Gender": "Female",
                                                    "code": "ca-ES"
                                                },
                                                {
                                                    "id": 6,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)",
                                                    "ShortName": "cs-CZ-Jakub",
                                                    "Gender": "Male",
                                                    "code": "cs-CZ"
                                                },
                                                {
                                                    "id": 7,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (da-DK, HelleRUS)",
                                                    "ShortName": "da-DK-HelleRUS",
                                                    "Gender": "Female",
                                                    "code": "da-DK"
                                                },
                                                {
                                                    "id": 8,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (de-AT, Michael)",
                                                    "ShortName": "de-AT-Michael",
                                                    "Gender": "Male",
                                                    "code": "de-AT"
                                                },
                                                {
                                                    "id": 9,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (de-CH, Karsten)",
                                                    "ShortName": "de-CH-Karsten",
                                                    "Gender": "Male",
                                                    "code": "de-CH"
                                                },
                                                {
                                                    "id": 10,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (de-DE, Hedda)",
                                                    "ShortName": "de-DE-Hedda",
                                                    "Gender": "Female",
                                                    "code": "de-DE"
                                                },
                                                {
                                                    "id": 11,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (de-DE, HeddaRUS)",
                                                    "ShortName": "de-DE-HeddaRUS",
                                                    "Gender": "Female",
                                                    "code": "de-DE"
                                                },
                                                {
                                                    "id": 12,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (de-DE, Stefan, Apollo)",
                                                    "ShortName": "de-DE-Stefan-Apollo",
                                                    "Gender": "Male",
                                                    "code": "de-DE"
                                                },
                                                {
                                                    "id": 13,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (el-GR, Stefanos)",
                                                    "ShortName": "el-GR-Stefanos",
                                                    "Gender": "Male",
                                                    "code": "el-GR"
                                                },
                                                {
                                                    "id": 14,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-AU, Catherine)",
                                                    "ShortName": "en-AU-Catherine",
                                                    "Gender": "Female",
                                                    "code": "en-AU"
                                                },
                                                {
                                                    "id": 15,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-AU, HayleyRUS)",
                                                    "ShortName": "en-AU-HayleyRUS",
                                                    "Gender": "Female",
                                                    "code": "en-AU"
                                                },
                                                {
                                                    "id": 16,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-CA, Linda)",
                                                    "ShortName": "en-CA-Linda",
                                                    "Gender": "Female",
                                                    "code": "en-CA"
                                                },
                                                {
                                                    "id": 17,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-CA, HeatherRUS)",
                                                    "ShortName": "en-CA-HeatherRUS",
                                                    "Gender": "Female",
                                                    "code": "en-CA"
                                                },
                                                {
                                                    "id": 18,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-GB, George, Apollo)",
                                                    "ShortName": "en-GB-George-Apollo",
                                                    "Gender": "Male",
                                                    "code": "en-GB"
                                                },
                                                {
                                                    "id": 19,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-GB, HazelRUS)",
                                                    "ShortName": "en-GB-HazelRUS",
                                                    "Gender": "Female",
                                                    "code": "en-GB"
                                                },
                                                {
                                                    "id": 20,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-GB, Susan, Apollo)",
                                                    "ShortName": "en-GB-Susan-Apollo",
                                                    "Gender": "Female",
                                                    "code": "en-GB"
                                                },
                                                {
                                                    "id": 21,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-IE, Sean)",
                                                    "ShortName": "en-IE-Sean",
                                                    "Gender": "Male",
                                                    "code": "en-IE"
                                                },
                                                {
                                                    "id": 22,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-IN, Heera, Apollo)",
                                                    "ShortName": "en-IN-Heera-Apollo",
                                                    "Gender": "Female",
                                                    "code": "en-IN"
                                                },
                                                {
                                                    "id": 23,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-IN, PriyaRUS)",
                                                    "ShortName": "en-IN-PriyaRUS",
                                                    "Gender": "Female",
                                                    "code": "en-IN"
                                                },
                                                {
                                                    "id": 24,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-IN, Ravi, Apollo)",
                                                    "ShortName": "en-IN-Ravi-Apollo",
                                                    "Gender": "Male",
                                                    "code": "en-IN"
                                                },
                                                {
                                                    "id": 25,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-US, BenjaminRUS)",
                                                    "ShortName": "en-US-BenjaminRUS",
                                                    "Gender": "Male",
                                                    "code": "en-US"
                                                },
                                                {
                                                    "id": 26,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)",
                                                    "ShortName": "en-US-Guy24kRUS",
                                                    "Gender": "Male",
                                                    "code": "en-US"
                                                },
                                                {
                                                    "id": 27,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)",
                                                    "ShortName": "en-US-JessaRUS",
                                                    "Gender": "Female",
                                                    "code": "en-US"
                                                },
                                                {
                                                    "id": 28,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)",
                                                    "ShortName": "en-US-Jessa24kRUS",
                                                    "Gender": "Female",
                                                    "code": "en-US"
                                                },
                                                {
                                                    "id": 29,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
                                                    "ShortName": "en-US-ZiraRUS",
                                                    "Gender": "Female",
                                                    "code": "en-US"
                                                },
                                                {
                                                    "id": 30,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (es-ES, HelenaRUS)",
                                                    "ShortName": "es-ES-HelenaRUS",
                                                    "Gender": "Female",
                                                    "code": "es-ES"
                                                },
                                                {
                                                    "id": 31,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (es-ES, Laura, Apollo)",
                                                    "ShortName": "es-ES-Laura-Apollo",
                                                    "Gender": "Female",
                                                    "code": "es-ES"
                                                },
                                                {
                                                    "id": 32,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (es-ES, Pablo, Apollo)",
                                                    "ShortName": "es-ES-Pablo-Apollo",
                                                    "Gender": "Male",
                                                    "code": "es-ES"
                                                },
                                                {
                                                    "id": 33,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)",
                                                    "ShortName": "es-MX-HildaRUS",
                                                    "Gender": "Female",
                                                    "code": "es-MX"
                                                },
                                                {
                                                    "id": 34,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (es-MX, Raul, Apollo)",
                                                    "ShortName": "es-MX-Raul-Apollo",
                                                    "Gender": "Male",
                                                    "code": "es-MX"
                                                },
                                                {
                                                    "id": 35,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)",
                                                    "ShortName": "fi-FI-HeidiRUS",
                                                    "Gender": "Female",
                                                    "code": "fi-FI"
                                                },
                                                {
                                                    "id": 36,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-CA, Caroline)",
                                                    "ShortName": "fr-CA-Caroline",
                                                    "Gender": "Female",
                                                    "code": "fr-CA"
                                                },
                                                {
                                                    "id": 37,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-CA, HarmonieRUS)",
                                                    "ShortName": "fr-CA-HarmonieRUS",
                                                    "Gender": "Female",
                                                    "code": "fr-CA"
                                                },
                                                {
                                                    "id": 38,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-CH, Guillaume)",
                                                    "ShortName": "fr-CH-Guillaume",
                                                    "Gender": "Male",
                                                    "code": "fr-CH"
                                                },
                                                {
                                                    "id": 39,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, HortenseRUS)",
                                                    "ShortName": "fr-FR-HortenseRUS",
                                                    "Gender": "Female",
                                                    "code": "fr-FR"
                                                },
                                                {
                                                    "id": 40,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, Julie, Apollo)",
                                                    "ShortName": "fr-FR-Julie-Apollo",
                                                    "Gender": "Female",
                                                    "code": "fr-FR"
                                                },
                                                {
                                                    "id": 41,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, Paul, Apollo)",
                                                    "ShortName": "fr-FR-Paul-Apollo",
                                                    "Gender": "Male",
                                                    "code": "fr-FR"
                                                },
                                                {
                                                    "id": 42,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (he-IL, Asaf)",
                                                    "ShortName": "he-IL-Asaf",
                                                    "Gender": "Male",
                                                    "code": "he-IL"
                                                },
                                                {
                                                    "id": 43,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Hemant)",
                                                    "ShortName": "hi-IN-Hemant",
                                                    "Gender": "Male",
                                                    "code": "hi-IN"
                                                },
                                                {
                                                    "id": 44,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana, Apollo)",
                                                    "ShortName": "hi-IN-Kalpana-Apollo",
                                                    "Gender": "Female",
                                                    "code": "hi-IN"
                                                },
                                                {
                                                    "id": 45,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana)",
                                                    "ShortName": "hi-IN-Kalpana",
                                                    "Gender": "Female",
                                                    "code": "hi-IN"
                                                },
                                                {
                                                    "id": 46,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (hr-HR, Matej)",
                                                    "ShortName": "hr-HR-Matej",
                                                    "Gender": "Male",
                                                    "code": "hr-HR"
                                                },
                                                {
                                                    "id": 47,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (hu-HU, Szabolcs)",
                                                    "ShortName": "hu-HU-Szabolcs",
                                                    "Gender": "Male",
                                                    "code": "hu-HU"
                                                },
                                                {
                                                    "id": 48,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (id-ID, Andika)",
                                                    "ShortName": "id-ID-Andika",
                                                    "Gender": "Male",
                                                    "code": "id-ID"
                                                },
                                                {
                                                    "id": 49,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (it-IT, Cosimo, Apollo)",
                                                    "ShortName": "it-IT-Cosimo-Apollo",
                                                    "Gender": "Male",
                                                    "code": "it-IT"
                                                },
                                                {
                                                    "id": 50,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (it-IT, LuciaRUS)",
                                                    "ShortName": "it-IT-LuciaRUS",
                                                    "Gender": "Female",
                                                    "code": "it-IT"
                                                },
                                                {
                                                    "id": 51,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ayumi, Apollo)",
                                                    "ShortName": "ja-JP-Ayumi-Apollo",
                                                    "Gender": "Female",
                                                    "code": "ja-JP"
                                                },
                                                {
                                                    "id": 52,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, HarukaRUS)",
                                                    "ShortName": "ja-JP-HarukaRUS",
                                                    "Gender": "Female",
                                                    "code": "ja-JP"
                                                },
                                                {
                                                    "id": 53,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ichiro, Apollo)",
                                                    "ShortName": "ja-JP-Ichiro-Apollo",
                                                    "Gender": "Male",
                                                    "code": "ja-JP"
                                                },
                                                {
                                                    "id": 54,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ko-KR, HeamiRUS)",
                                                    "ShortName": "ko-KR-HeamiRUS",
                                                    "Gender": "Female",
                                                    "code": "ko-KR"
                                                },
                                                {
                                                    "id": 55,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ms-MY, Rizwan)",
                                                    "ShortName": "ms-MY-Rizwan",
                                                    "Gender": "Male",
                                                    "code": "ms-MY"
                                                },
                                                {
                                                    "id": 56,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (nb-NO, HuldaRUS)",
                                                    "ShortName": "nb-NO-HuldaRUS",
                                                    "Gender": "Female",
                                                    "code": "nb-NO"
                                                },
                                                {
                                                    "id": 57,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (nl-NL, HannaRUS)",
                                                    "ShortName": "nl-NL-HannaRUS",
                                                    "Gender": "Female",
                                                    "code": "nl-NL"
                                                },
                                                {
                                                    "id": 58,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (pl-PL, PaulinaRUS)",
                                                    "ShortName": "pl-PL-PaulinaRUS",
                                                    "Gender": "Female",
                                                    "code": "pl-PL"
                                                },
                                                {
                                                    "id": 59,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (pt-BR, HeloisaRUS)",
                                                    "ShortName": "pt-BR-HeloisaRUS",
                                                    "Gender": "Female",
                                                    "code": "pt-BR"
                                                },
                                                {
                                                    "id": 60,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (pt-BR, Daniel, Apollo)",
                                                    "ShortName": "pt-BR-Daniel-Apollo",
                                                    "Gender": "Male",
                                                    "code": "pt-BR"
                                                },
                                                {
                                                    "id": 61,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (pt-PT, HeliaRUS)",
                                                    "ShortName": "pt-PT-HeliaRUS",
                                                    "Gender": "Female",
                                                    "code": "pt-PT"
                                                },
                                                {
                                                    "id": 62,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ro-RO, Andrei)",
                                                    "ShortName": "ro-RO-Andrei",
                                                    "Gender": "Male",
                                                    "code": "ro-RO"
                                                },
                                                {
                                                    "id": 63,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, EkaterinaRUS)",
                                                    "ShortName": "ru-RU-EkaterinaRUS",
                                                    "Gender": "Female",
                                                    "code": "ru-RU"
                                                },
                                                {
                                                    "id": 64,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, Irina, Apollo)",
                                                    "ShortName": "ru-RU-Irina-Apollo",
                                                    "Gender": "Female",
                                                    "code": "ru-RU"
                                                },
                                                {
                                                    "id": 65,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, Pavel, Apollo)",
                                                    "ShortName": "ru-RU-Pavel-Apollo",
                                                    "Gender": "Male",
                                                    "code": "ru-RU"
                                                },
                                                {
                                                    "id": 66,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (sk-SK, Filip)",
                                                    "ShortName": "sk-SK-Filip",
                                                    "Gender": "Male",
                                                    "code": "sk-SK"
                                                },
                                                {
                                                    "id": 67,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (sl-SI, Lado)",
                                                    "ShortName": "sl-SI-Lado",
                                                    "Gender": "Male",
                                                    "code": "sl-SI"
                                                },
                                                {
                                                    "id": 68,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (sv-SE, HedvigRUS)",
                                                    "ShortName": "sv-SE-HedvigRUS",
                                                    "Gender": "Female",
                                                    "code": "sv-SE"
                                                },
                                                {
                                                    "id": 69,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (ta-IN, Valluvar)",
                                                    "ShortName": "ta-IN-Valluvar",
                                                    "Gender": "Male",
                                                    "code": "ta-IN"
                                                },
                                                {
                                                    "id": 70,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (te-IN, Chitra)",
                                                    "ShortName": "te-IN-Chitra",
                                                    "Gender": "Female",
                                                    "code": "te-IN"
                                                },
                                                {
                                                    "id": 71,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (th-TH, Pattara)",
                                                    "ShortName": "th-TH-Pattara",
                                                    "Gender": "Male",
                                                    "code": "th-TH"
                                                },
                                                {
                                                    "id": 72,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (tr-TR, SedaRUS)",
                                                    "ShortName": "tr-TR-SedaRUS",
                                                    "Gender": "Female",
                                                    "code": "tr-TR"
                                                },
                                                {
                                                    "id": 73,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (vi-VN, An)",
                                                    "ShortName": "vi-VN-An",
                                                    "Gender": "Male",
                                                    "code": "vi-VN"
                                                },
                                                {
                                                    "id": 74,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, HuihuiRUS)",
                                                    "ShortName": "zh-CN-HuihuiRUS",
                                                    "Gender": "Female",
                                                    "code": "zh-CN"
                                                },
                                                {
                                                    "id": 75,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, Kangkang, Apollo)",
                                                    "ShortName": "zh-CN-Kangkang-Apollo",
                                                    "Gender": "Male",
                                                    "code": "zh-CN"
                                                },
                                                {
                                                    "id": 76,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, Yaoyao, Apollo)",
                                                    "ShortName": "zh-CN-Yaoyao-Apollo",
                                                    "Gender": "Female",
                                                    "code": "zh-CN"
                                                },
                                                {
                                                    "id": 77,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, Tracy, Apollo)",
                                                    "ShortName": "zh-HK-Tracy-Apollo",
                                                    "Gender": "Female",
                                                    "code": "zh-HK"
                                                },
                                                {
                                                    "id": 78,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, TracyRUS)",
                                                    "ShortName": "zh-HK-TracyRUS",
                                                    "Gender": "Female",
                                                    "code": "zh-HK"
                                                },
                                                {
                                                    "id": 79,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, Danny, Apollo)",
                                                    "ShortName": "zh-HK-Danny-Apollo",
                                                    "Gender": "Male",
                                                    "code": "zh-HK"
                                                },
                                                {
                                                    "id": 80,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, HanHanRUS)",
                                                    "ShortName": "zh-TW-HanHanRUS",
                                                    "Gender": "Female",
                                                    "code": "zh-TW"
                                                },
                                                {
                                                    "id": 81,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, Yating, Apollo)",
                                                    "ShortName": "zh-TW-Yating-Apollo",
                                                    "Gender": "Female",
                                                    "code": "zh-TW"
                                                },
                                                {
                                                    "id": 82,
                                                    "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, Zhiwei, Apollo)",
                                                    "ShortName": "zh-TW-Zhiwei-Apollo",
                                                    "Gender": "Male",
                                                    "code": "zh-TW"
                                                }
                                            ]
                                        )
    const [ idTTT, setIdTTT ] = useState()
    const [ idTTS, setIdTTS ] = useState()
    const [ idSTT, setIdSTT ] = useState()
    const [ languagesTTT, setLanguagesTTT ] = useState([])
    const [ languagesTTS, setLanguagesTTS ] = useState([])
    const [ languagesSTT, setLanguagesSTT ] = useState([])
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
                                        'vendor':'',
                                        'voice_gender':'',
                                        'voice_name':'',
                                        'id_voice':''
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

                let res = await fetch(`${Config.url}/apis`,config)
                let data = await res.json()
                setEndpoints(data.apis)
                
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
        var endpoint  = endpoints.filter((element) =>{
            return element.id === id
        })
        var param = JSON.parse(endpoint[0].url_param);
        if (param) {
            var vendor = param.filter((element) =>{
                return element.name_param === "vendor"
            })
            
            if (e.target.dataset.type === "TTT"){
                setIdTTT(id)
                setLanguagesTTT(endpoint[0].languages)
                setJsonTTT({
                    ...jsonTTT,"vendor" : vendor[0].value
                })
            }else if (e.target.dataset.type === "TTS"){
                setIdTTS(id)
                setLanguagesTTS(endpoint[0].languages)
                setJsonTTS({
                    ...jsonTTS,"vendor" : vendor[0].value
                })
            }else if (e.target.dataset.type === "STT"){
                setIdSTT(id)
                setLanguagesSTT(endpoint[0].languages)
                setJsonSTT({
                    ...jsonSTT,"vendor" : vendor[0].value
                })
            }
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
            var voice = voices.filter((element) =>{
                return ""+element.id === e.target.value
            })
            
            setJsonTTS({
                ...jsonTTS,
                "id_voice" : voice[0].id,
                "voice" : voice[0].code,
                "voice_gender" : voice[0].Gender,
                "voice_name" : voice[0].name
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
        var zone = document.getElementById("contentAudio")
        var url = URL.createObjectURL(file)
        var au = document.createElement('audio')
        au.controls = true
        au.src = url
        zone.innerHTML='';
        zone.appendChild(au)
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            console.log(reader.result);
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
        setJsonTTS({
            ...jsonTTS,"text" : textarea.value
        })
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
        setJsonTTT({
            ...jsonTTT,"Text" : textarea.value
        })
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
        var zone = document.getElementById("contentAudio")
        var url = URL.createObjectURL(blob)
        var au = document.createElement('audio')
        au.controls = true
        au.src = url
        zone.innerHTML='';
        zone.appendChild(au)
        var reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = function () {
            setJsonSTT({
                ...jsonSTT,"file" : reader.result.substring(22)
            })
        }
        reader.onerror = function (error) {
            console.log('Error: ', error)
        } 
    }

    const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
          
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          
          const byteArray = new Uint8Array(byteNumbers);
          
          byteArrays.push(byteArray);
        }
        
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
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
        e.preventDefault()
        console.log("TTS")
        setLoading(true)
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
            setLoading(false)
            const contentType = 'audio/wav'
            const b64Data = data.audio64
            const blob = b64toBlob(b64Data, contentType)
            var zone = document.getElementById("contentAudio2")
            var url = URL.createObjectURL(blob)
            var au = document.createElement('audio')
            au.controls = true
            au.src = url
            zone.innerHTML=''
            zone.appendChild(au)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)  
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
            languagesTTT={languagesTTT}
            languagesTTS={languagesTTS}
            languagesSTT={languagesSTT}
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