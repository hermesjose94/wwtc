import React,{ useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Config from '../config'
import Test from './Test'

const TestContainer = () => {
    
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ endpoints, setEndpoints ] = useState()
    const [ voicesList ] = useState(
        [
            {
                "id": 1,
                "id_endpoint": 10,
                "name": 'HUI',
                "ShortName": "HUI",
                "Gender": "Female",
                "code":'hui',
                "language":'hui'
            },
            {
                "id": 2,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ar-EG, Hoda)",
                "ShortName": "ar-EG-Hoda",
                "Gender": "Female",
                "code": "ar-EG",
                "language": "ar-EG"
            },
            {
                "id": 3,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ar-SA, Naayf)",
                "ShortName": "ar-SA-Naayf",
                "Gender": "Male",
                "code": "ar-SA",
                "language": "ar-SA"
            },
            {
                "id": 4,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (bg-BG, Ivan)",
                "ShortName": "bg-BG-Ivan",
                "Gender": "Male",
                "code": "bg-BG",
                "language": "bg-BG"
            },
            {
                "id": 5,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ca-ES, HerenaRUS)",
                "ShortName": "ca-ES-HerenaRUS",
                "Gender": "Female",
                "code": "ca-ES",
                "language": "ca-ES"
            },
            {
                "id": 6,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (cs-CZ, Jakub)",
                "ShortName": "cs-CZ-Jakub",
                "Gender": "Male",
                "code": "cs-CZ",
                "language": "cs-CZ"
            },
            {
                "id": 7,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (da-DK, HelleRUS)",
                "ShortName": "da-DK-HelleRUS",
                "Gender": "Female",
                "code": "da-DK",
                "language": "da-DK"
            },
            {
                "id": 8,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (de-AT, Michael)",
                "ShortName": "de-AT-Michael",
                "Gender": "Male",
                "code": "de-AT",
                "language": "de-AT"
            },
            {
                "id": 9,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (de-CH, Karsten)",
                "ShortName": "de-CH-Karsten",
                "Gender": "Male",
                "code": "de-CH",
                "language": "de-CH"
            },
            {
                "id": 10,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (de-DE, Hedda)",
                "ShortName": "de-DE-Hedda",
                "Gender": "Female",
                "code": "de-DE",
                "language": "de-DE"
            },
            {
                "id": 11,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (de-DE, HeddaRUS)",
                "ShortName": "de-DE-HeddaRUS",
                "Gender": "Female",
                "code": "de-DE",
                "language": "de-DE"
            },
            {
                "id": 12,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (de-DE, Stefan, Apollo)",
                "ShortName": "de-DE-Stefan-Apollo",
                "Gender": "Male",
                "code": "de-DE",
                "language": "de-DE"
            },
            {
                "id": 13,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (el-GR, Stefanos)",
                "ShortName": "el-GR-Stefanos",
                "Gender": "Male",
                "code": "el-GR",
                "language": "el-GR"
            },
            {
                "id": 14,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-AU, Catherine)",
                "ShortName": "en-AU-Catherine",
                "Gender": "Female",
                "code": "en-AU",
                "language": "en-AU"
            },
            {
                "id": 15,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-AU, HayleyRUS)",
                "ShortName": "en-AU-HayleyRUS",
                "Gender": "Female",
                "code": "en-AU",
                "language": "en-AU"
            },
            {
                "id": 16,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-CA, Linda)",
                "ShortName": "en-CA-Linda",
                "Gender": "Female",
                "code": "en-CA",
                "language": "en-CA"
            },
            {
                "id": 17,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-CA, HeatherRUS)",
                "ShortName": "en-CA-HeatherRUS",
                "Gender": "Female",
                "code": "en-CA",
                "language": "en-CA"
            },
            {
                "id": 18,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-GB, George, Apollo)",
                "ShortName": "en-GB-George-Apollo",
                "Gender": "Male",
                "code": "en-GB",
                "language": "en-GB"
            },
            {
                "id": 19,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-GB, HazelRUS)",
                "ShortName": "en-GB-HazelRUS",
                "Gender": "Female",
                "code": "en-GB",
                "language": "en-GB"
            },
            {
                "id": 20,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-GB, Susan, Apollo)",
                "ShortName": "en-GB-Susan-Apollo",
                "Gender": "Female",
                "code": "en-GB",
                "language": "en-GB"
            },
            {
                "id": 21,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-IE, Sean)",
                "ShortName": "en-IE-Sean",
                "Gender": "Male",
                "code": "en-IE",
                "language": "en-IE"
            },
            {
                "id": 22,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-IN, Heera, Apollo)",
                "ShortName": "en-IN-Heera-Apollo",
                "Gender": "Female",
                "code": "en-IN",
                "language": "en-IN"
            },
            {
                "id": 23,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-IN, PriyaRUS)",
                "ShortName": "en-IN-PriyaRUS",
                "Gender": "Female",
                "code": "en-IN",
                "language": "en-IN"
            },
            {
                "id": 24,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-IN, Ravi, Apollo)",
                "ShortName": "en-IN-Ravi-Apollo",
                "Gender": "Male",
                "code": "en-IN",
                "language": "en-IN"
            },
            {
                "id": 25,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-US, BenjaminRUS)",
                "ShortName": "en-US-BenjaminRUS",
                "Gender": "Male",
                "code": "en-US",
                "language": "en-US"
            },
            {
                "id": 26,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)",
                "ShortName": "en-US-Guy24kRUS",
                "Gender": "Male",
                "code": "en-US",
                "language": "en-US"
            },
            {
                "id": 27,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)",
                "ShortName": "en-US-JessaRUS",
                "Gender": "Female",
                "code": "en-US",
                "language": "en-US"
            },
            {
                "id": 28,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)",
                "ShortName": "en-US-Jessa24kRUS",
                "Gender": "Female",
                "code": "en-US",
                "language": "en-US"
            },
            {
                "id": 29,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
                "ShortName": "en-US-ZiraRUS",
                "Gender": "Female",
                "code": "en-US",
                "language": "en-US"
            },
            {
                "id": 30,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (es-ES, HelenaRUS)",
                "ShortName": "es-ES-HelenaRUS",
                "Gender": "Female",
                "code": "es-ES",
                "language": "es-ES"
            },
            {
                "id": 31,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (es-ES, Laura, Apollo)",
                "ShortName": "es-ES-Laura-Apollo",
                "Gender": "Female",
                "code": "es-ES",
                "language": "es-ES"
            },
            {
                "id": 32,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (es-ES, Pablo, Apollo)",
                "ShortName": "es-ES-Pablo-Apollo",
                "Gender": "Male",
                "code": "es-ES",
                "language": "es-ES"
            },
            {
                "id": 33,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)",
                "ShortName": "es-MX-HildaRUS",
                "Gender": "Female",
                "code": "es-MX",
                "language": "es-MX"
            },
            {
                "id": 34,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (es-MX, Raul, Apollo)",
                "ShortName": "es-MX-Raul-Apollo",
                "Gender": "Male",
                "code": "es-MX",
                "language": "es-MX"
            },
            {
                "id": 35,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fi-FI, HeidiRUS)",
                "ShortName": "fi-FI-HeidiRUS",
                "Gender": "Female",
                "code": "fi-FI",
                "language": "fi-FI"
            },
            {
                "id": 36,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-CA, Caroline)",
                "ShortName": "fr-CA-Caroline",
                "Gender": "Female",
                "code": "fr-CA",
                "language": "fr-CA"
            },
            {
                "id": 37,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-CA, HarmonieRUS)",
                "ShortName": "fr-CA-HarmonieRUS",
                "Gender": "Female",
                "code": "fr-CA",
                "language": "fr-CA"
            },
            {
                "id": 38,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-CH, Guillaume)",
                "ShortName": "fr-CH-Guillaume",
                "Gender": "Male",
                "code": "fr-CH",
                "language": "fr-CH"
            },
            {
                "id": 39,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, HortenseRUS)",
                "ShortName": "fr-FR-HortenseRUS",
                "Gender": "Female",
                "code": "fr-FR",
                "language": "fr-FR"
            },
            {
                "id": 40,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, Julie, Apollo)",
                "ShortName": "fr-FR-Julie-Apollo",
                "Gender": "Female",
                "code": "fr-FR",
                "language": "fr-FR"
            },
            {
                "id": 41,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (fr-FR, Paul, Apollo)",
                "ShortName": "fr-FR-Paul-Apollo",
                "Gender": "Male",
                "code": "fr-FR",
                "language": "fr-FR"
            },
            {
                "id": 42,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (he-IL, Asaf)",
                "ShortName": "he-IL-Asaf",
                "Gender": "Male",
                "code": "he-IL",
                "language": "he-IL"
            },
            {
                "id": 43,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Hemant)",
                "ShortName": "hi-IN-Hemant",
                "Gender": "Male",
                "code": "hi-IN",
                "language": "hi-IN"
            },
            {
                "id": 44,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana, Apollo)",
                "ShortName": "hi-IN-Kalpana-Apollo",
                "Gender": "Female",
                "code": "hi-IN",
                "language": "hi-IN"
            },
            {
                "id": 45,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (hi-IN, Kalpana)",
                "ShortName": "hi-IN-Kalpana",
                "Gender": "Female",
                "code": "hi-IN",
                "language": "hi-IN"
            },
            {
                "id": 46,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (hr-HR, Matej)",
                "ShortName": "hr-HR-Matej",
                "Gender": "Male",
                "code": "hr-HR",
                "language": "hr-HR"
            },
            {
                "id": 47,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (hu-HU, Szabolcs)",
                "ShortName": "hu-HU-Szabolcs",
                "Gender": "Male",
                "code": "hu-HU",
                "language": "hu-HU"
            },
            {
                "id": 48,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (id-ID, Andika)",
                "ShortName": "id-ID-Andika",
                "Gender": "Male",
                "code": "id-ID",
                "language": "id-ID"
            },
            {
                "id": 49,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (it-IT, Cosimo, Apollo)",
                "ShortName": "it-IT-Cosimo-Apollo",
                "Gender": "Male",
                "code": "it-IT",
                "language": "it-IT"
            },
            {
                "id": 50,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (it-IT, LuciaRUS)",
                "ShortName": "it-IT-LuciaRUS",
                "Gender": "Female",
                "code": "it-IT",
                "language": "it-IT"
            },
            {
                "id": 51,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ayumi, Apollo)",
                "ShortName": "ja-JP-Ayumi-Apollo",
                "Gender": "Female",
                "code": "ja-JP",
                "language": "ja-JP"
            },
            {
                "id": 52,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, HarukaRUS)",
                "ShortName": "ja-JP-HarukaRUS",
                "Gender": "Female",
                "code": "ja-JP",
                "language": "ja-JP"
            },
            {
                "id": 53,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ja-JP, Ichiro, Apollo)",
                "ShortName": "ja-JP-Ichiro-Apollo",
                "Gender": "Male",
                "code": "ja-JP",
                "language": "ja-JP"
            },
            {
                "id": 54,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ko-KR, HeamiRUS)",
                "ShortName": "ko-KR-HeamiRUS",
                "Gender": "Female",
                "code": "ko-KR",
                "language": "ko-KR"
            },
            {
                "id": 55,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ms-MY, Rizwan)",
                "ShortName": "ms-MY-Rizwan",
                "Gender": "Male",
                "code": "ms-MY",
                "language": "ms-MY"
            },
            {
                "id": 56,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (nb-NO, HuldaRUS)",
                "ShortName": "nb-NO-HuldaRUS",
                "Gender": "Female",
                "code": "nb-NO",
                "language": "nb-NO"
            },
            {
                "id": 57,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (nl-NL, HannaRUS)",
                "ShortName": "nl-NL-HannaRUS",
                "Gender": "Female",
                "code": "nl-NL",
                "language": "nl-NL"
            },
            {
                "id": 58,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (pl-PL, PaulinaRUS)",
                "ShortName": "pl-PL-PaulinaRUS",
                "Gender": "Female",
                "code": "pl-PL",
                "language": "pl-PL"
            },
            {
                "id": 59,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (pt-BR, HeloisaRUS)",
                "ShortName": "pt-BR-HeloisaRUS",
                "Gender": "Female",
                "code": "pt-BR",
                "language": "pt-BR"
            },
            {
                "id": 60,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (pt-BR, Daniel, Apollo)",
                "ShortName": "pt-BR-Daniel-Apollo",
                "Gender": "Male",
                "code": "pt-BR",
                "language": "pt-BR"
            },
            {
                "id": 61,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (pt-PT, HeliaRUS)",
                "ShortName": "pt-PT-HeliaRUS",
                "Gender": "Female",
                "code": "pt-PT",
                "language": "pt-PT"
            },
            {
                "id": 62,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ro-RO, Andrei)",
                "ShortName": "ro-RO-Andrei",
                "Gender": "Male",
                "code": "ro-RO",
                "language": "ro-RO"
            },
            {
                "id": 63,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, EkaterinaRUS)",
                "ShortName": "ru-RU-EkaterinaRUS",
                "Gender": "Female",
                "code": "ru-RU",
                "language": "ru-RU"
            },
            {
                "id": 64,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, Irina, Apollo)",
                "ShortName": "ru-RU-Irina-Apollo",
                "Gender": "Female",
                "code": "ru-RU",
                "language": "ru-RU"
            },
            {
                "id": 65,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ru-RU, Pavel, Apollo)",
                "ShortName": "ru-RU-Pavel-Apollo",
                "Gender": "Male",
                "code": "ru-RU",
                "language": "ru-RU"
            },
            {
                "id": 66,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (sk-SK, Filip)",
                "ShortName": "sk-SK-Filip",
                "Gender": "Male",
                "code": "sk-SK",
                "language": "sk-SK"
            },
            {
                "id": 67,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (sl-SI, Lado)",
                "ShortName": "sl-SI-Lado",
                "Gender": "Male",
                "code": "sl-SI",
                "language": "sl-SI"
            },
            {
                "id": 68,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (sv-SE, HedvigRUS)",
                "ShortName": "sv-SE-HedvigRUS",
                "Gender": "Female",
                "code": "sv-SE",
                "language": "sv-SE"
            },
            {
                "id": 69,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (ta-IN, Valluvar)",
                "ShortName": "ta-IN-Valluvar",
                "Gender": "Male",
                "code": "ta-IN",
                "language": "ta-IN"
            },
            {
                "id": 70,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (te-IN, Chitra)",
                "ShortName": "te-IN-Chitra",
                "Gender": "Female",
                "code": "te-IN",
                "language": "te-IN"
            },
            {
                "id": 71,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (th-TH, Pattara)",
                "ShortName": "th-TH-Pattara",
                "Gender": "Male",
                "code": "th-TH",
                "language": "th-TH"
            },
            {
                "id": 72,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (tr-TR, SedaRUS)",
                "ShortName": "tr-TR-SedaRUS",
                "Gender": "Female",
                "code": "tr-TR",
                "language": "tr-TR"
            },
            {
                "id": 73,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (vi-VN, An)",
                "ShortName": "vi-VN-An",
                "Gender": "Male",
                "code": "vi-VN",
                "language": "vi-VN"
            },
            {
                "id": 74,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, HuihuiRUS)",
                "ShortName": "zh-CN-HuihuiRUS",
                "Gender": "Female",
                "code": "zh-CN",
                "language": "zh-CN"
            },
            {
                "id": 75,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, Kangkang, Apollo)",
                "ShortName": "zh-CN-Kangkang-Apollo",
                "Gender": "Male",
                "code": "zh-CN",
                "language": "zh-CN"
            },
            {
                "id": 76,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-CN, Yaoyao, Apollo)",
                "ShortName": "zh-CN-Yaoyao-Apollo",
                "Gender": "Female",
                "code": "zh-CN",
                "language": "zh-CN"
            },
            {
                "id": 77,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, Tracy, Apollo)",
                "ShortName": "zh-HK-Tracy-Apollo",
                "Gender": "Female",
                "code": "zh-HK",
                "language": "zh-HK"
            },
            {
                "id": 78,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, TracyRUS)",
                "ShortName": "zh-HK-TracyRUS",
                "Gender": "Female",
                "code": "zh-HK",
                "language": "zh-HK"
            },
            {
                "id": 79,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-HK, Danny, Apollo)",
                "ShortName": "zh-HK-Danny-Apollo",
                "Gender": "Male",
                "code": "zh-HK",
                "language": "zh-HK"
            },
            {
                "id": 80,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, HanHanRUS)",
                "ShortName": "zh-TW-HanHanRUS",
                "Gender": "Female",
                "code": "zh-TW",
                "language": "zh-TW"
            },
            {
                "id": 81,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, Yating, Apollo)",
                "ShortName": "zh-TW-Yating-Apollo",
                "Gender": "Female",
                "code": "zh-TW",
                "language": "zh-TW"
            },
            {
                "id": 82,
                "id_endpoint": 10,
                "name": "Microsoft Server Speech Text to Speech Voice (zh-TW, Zhiwei, Apollo)",
                "ShortName": "zh-TW-Zhiwei-Apollo",
                "Gender": "Male",
                "code": "zh-TW",
                "language": "zh-TW"
            },
            {
                "id": 83,
                "id_endpoint": 2,
                "name": "Sophie (US)",
                "ShortName": "Sophie (US)",
                "Gender": "Female",
                "code": "Sophie",
                "language": "en-US"
            },
            {
                "id": 84,
                "id_endpoint": 2,
                "name": "Mark (US)",
                "ShortName": "Mark (US)",
                "Gender": "Male",
                "code": "Mark",
                "language": "en-US"
            },
            {
                "id": 85,
                "id_endpoint": 2,
                "name": "Brian (England)",
                "ShortName": "Brian (England)",
                "Gender": "Male",
                "code": "en_gb_brian",
                "language": "en-US"
            },
            {
                "id": 86,
                "id_endpoint": 2,
                "name": "Amy (England)",
                "ShortName": "Amy (England)",
                "Gender": "Female",
                "code": "en_gb_amy",
                "language": "en-US"
            },
            {
                "id": 87,
                "id_endpoint": 2,
                "name": "Lee (Australian)",
                "ShortName": "Lee (Australian)",
                "Gender": "Male",
                "code": "Lee",
                "language": "en-US"
            },
            {
                "id": 88,
                "id_endpoint": 2,
                "name": "Karen (Australian)",
                "ShortName": "Karen (Australian)",
                "Gender": "Female",
                "code": "Karen",
                "language": "en-US"
            },
            {
                "id": 89,
                "id_endpoint": 2,
                "name": "Heather (Scottish)",
                "ShortName": "Heather (Scottish)",
                "Gender": "Male",
                "code": "Heather",
                "language": "en-US"
            },
            {
                "id": 90,
                "id_endpoint": 2,
                "name": "Sangeeta (Indian)",
                "ShortName": "Sangeeta (Indian)",
                "Gender": "Female",
                "code": "Sangeeta",
                "language": "en-US"
            },
            {
                "id": 91,
                "id_endpoint": 2,
                "name": "Leila",
                "ShortName": "Leila",
                "Gender": "Female",
                "code": "leila22k",
                "language": "ar-IL"
            },
            {
                "id": 92,
                "id_endpoint": 2,
                "name": "Mehdi",
                "ShortName": "Mehdi",
                "Gender": "Female",
                "code": "mehdi22k",
                "language": "ar-IL"
            },
            {
                "id": 93,
                "id_endpoint": 2,
                "name": "Jordi",
                "ShortName": "Jordi",
                "Gender": "Male",
                "code": "Jordi",
                "language": "ca-ES"
            },
            {
                "id": 94,
                "id_endpoint": 2,
                "name": "Empar",
                "ShortName": "Empar",
                "Gender": "Female",
                "code": "Empar",
                "language": "ca-ES"
            },
            {
                "id": 95,
                "id_endpoint": 2,
                "name": "Zuzana",
                "ShortName": "Zuzana",
                "Gender": "Female",
                "code": "Zuzana",
                "language": "cs-CZ"
            },
            {
                "id": 96,
                "id_endpoint": 2,
                "name": "Geraint",
                "ShortName": "Geraint",
                "Gender": "Male",
                "code": "cy_geraint",
                "language": "cy-CY"
            },
            {
                "id": 97,
                "id_endpoint": 2,
                "name": "Gwyneth",
                "ShortName": "Gwyneth",
                "Gender": "Female",
                "code": "cy_gwyneth",
                "language": "cy-CY"
            },
            {
                "id": 98,
                "id_endpoint": 2,
                "name": "Ida",
                "ShortName": "Ida",
                "Gender": "Female",
                "code": "Ida(mette22k)",
                "language": "da-DK"
            },
            {
                "id": 99,
                "id_endpoint": 2,
                "name": "Hans",
                "ShortName": "Hans",
                "Gender": "Male",
                "code": "max",
                "language": "de-DE"
            },
            {
                "id": 100,
                "id_endpoint": 2,
                "name": "Merlene",
                "ShortName": "Merlene",
                "Gender": "Female",
                "code": "de_marlene",
                "language": "de-DE"
            },
            {
                "id": 101,
                "id_endpoint": 2,
                "name": "Dimitris",
                "ShortName": "Dimitris",
                "Gender": "Male",
                "code": "dimitris22k",
                "language": "el-GR"
            },
            {
                "id": 102,
                "id_endpoint": 2,
                "name": "Afroditi",
                "ShortName": "Afroditi",
                "Gender": "Female",
                "code": "Afroditi",
                "language": "el-GR"
            },
            {
                "id": 103,
                "id_endpoint": 2,
                "name": "Carlos (US)",
                "ShortName": "Carlos (US)",
                "Gender": "Male",
                "code": "Carlos",
                "language": "eu-ES"
            },
            {
                "id": 104,
                "id_endpoint": 2,
                "name": "Ximena (US)",
                "ShortName": "Ximena (US)",
                "Gender": "Female",
                "code": "Ximena",
                "language": "eu-ES"
            },
            {
                "id": 105,
                "id_endpoint": 2,
                "name": "Jorge (Spain)",
                "ShortName": "Jorge (Spain)",
                "Gender": "Male",
                "code": "Jorge",
                "language": "eu-ES"
            },
            {
                "id": 106,
                "id_endpoint": 2,
                "name": "Leonor (Spain)",
                "ShortName": "Leonor (Spain)",
                "Gender": "Female",
                "code": "Leonor",
                "language": "eu-ES"
            },
            {
                "id": 107,
                "id_endpoint": 2,
                "name": "Arantxa",
                "ShortName": "Arantxa",
                "Gender": "Female",
                "code": "Arantxa(Miren)",
                "language": "eu-ES"
            },
            {
                "id": 108,
                "id_endpoint": 2,
                "name": "Milla",
                "ShortName": "Milla",
                "Gender": "Female",
                "code": "Milla",
                "language": "fi-FI"
            },
            {
                "id": 109,
                "id_endpoint": 2,
                "name": "Hanus",
                "ShortName": "Hanus",
                "Gender": "Female",
                "code": "hanus22k",
                "language": "fo-FO"
            },
            {
                "id": 110,
                "id_endpoint": 2,
                "name": "Thomas",
                "ShortName": "Thomas",
                "Gender": "Male",
                "code": "Thomas",
                "language": "fr-FR"
            },
            {
                "id": 111,
                "id_endpoint": 2,
                "name": "Elise",
                "ShortName": "Elise",
                "Gender": "Female",
                "code": "Elise",
                "language": "fr-FR"
            },
            {
                "id": 112,
                "id_endpoint": 2,
                "name": "leo",
                "ShortName": "leo",
                "Gender": "Male",
                "code": "leo",
                "language": "fr-CA"
            },
            {
                "id": 113,
                "id_endpoint": 2,
                "name": "chloe",
                "ShortName": "chloe",
                "Gender": "Female",
                "code": "chloe",
                "language": "fr-CA"
            },
            {
                "id": 114,
                "id_endpoint": 2,
                "name": "Carmela",
                "ShortName": "Carmela",
                "Gender": "Female",
                "code": "Carmela",
                "language": "gl-ES"
            },
            {
                "id": 115,
                "id_endpoint": 2,
                "name": "Lekha",
                "ShortName": "Lekha",
                "Gender": "Female",
                "code": "Lekha",
                "language": "hi-IN"
            },
            {
                "id": 116,
                "id_endpoint": 2,
                "name": "Luca",
                "ShortName": "Luca",
                "Gender": "Male",
                "code": "Luca",
                "language": "it-IT"
            },
            {
                "id": 117,
                "id_endpoint": 2,
                "name": "Paola",
                "ShortName": "Paola",
                "Gender": "Female",
                "code": "Paola",
                "language": "it-IT"
            },
            {
                "id": 118,
                "id_endpoint": 2,
                "name": "Akira",
                "ShortName": "Akira",
                "Gender": "Male",
                "code": "Akira",
                "language": "ja-JP"
            },
            {
                "id": 119,
                "id_endpoint": 2,
                "name": "Sayaka",
                "ShortName": "Sayaka",
                "Gender": "Female",
                "code": "Sayaka",
                "language": "ja-JP"
            },
            {
                "id": 120,
                "id_endpoint": 2,
                "name": "Jihun",
                "ShortName": "Jihun",
                "Gender": "Male",
                "code": "Jihun",
                "language": "ko-KR"
            },
            {
                "id": 121,
                "id_endpoint": 2,
                "name": "Yumi",
                "ShortName": "Yumi",
                "Gender": "Female",
                "code": "Yumi",
                "language": "ko-KR"
            },
            {
                "id": 122,
                "id_endpoint": 2,
                "name": "Ellen",
                "ShortName": "Ellen",
                "Gender": "Female",
                "code": "Ellen",
                "language": "nl-BE"
            },
            {
                "id": 123,
                "id_endpoint": 2,
                "name": "Xander",
                "ShortName": "Xander",
                "Gender": "Male",
                "code": "Xander",
                "language": "nl-NL"
            },
            {
                "id": 124,
                "id_endpoint": 2,
                "name": "Claire",
                "ShortName": "Claire",
                "Gender": "Female",
                "code": "Claire",
                "language": "nl-NL"
            },
            {
                "id": 125,
                "id_endpoint": 2,
                "name": "Nora (Nynorska)",
                "ShortName": "Nora (Nynorska)",
                "Gender": "Female",
                "code": "Nora",
                "language": "no-NN"
            },
            {
                "id": 126,
                "id_endpoint": 2,
                "name": "Olav (Bokmaal)",
                "ShortName": "Olav (Bokmaal)",
                "Gender": "Male",
                "code": "olav22k",
                "language": "no-NB"
            },
            {
                "id": 127,
                "id_endpoint": 2,
                "name": "Bente (Bokmaal)",
                "ShortName": "Bente (Bokmaal)",
                "Gender": "Female",
                "code": "bente22k",
                "language": "no-NB"
            },
            {
                "id": 128,
                "id_endpoint": 2,
                "name": "Krzysztof",
                "ShortName": "Krzysztof",
                "Gender": "Male",
                "code": "Krzysztof",
                "language": "pl-PL"
            },
            {
                "id": 129,
                "id_endpoint": 2,
                "name": "Zosia",
                "ShortName": "Zosia",
                "Gender": "Female",
                "code": "Zosia",
                "language": "pl-PL"
            },
            {
                "id": 130,
                "id_endpoint": 2,
                "name": "Ricardo (Brazil)",
                "ShortName": "Ricardo (Brazil)",
                "Gender": "Male",
                "code": "pt_br_ricardo",
                "language": "pt-BR"
            },
            {
                "id": 131,
                "id_endpoint": 2,
                "name": "Fernanda (Brazil)",
                "ShortName": "Fernanda (Brazil)",
                "Gender": "Female",
                "code": "Fernanda",
                "language": "pt-BR"
            },
            {
                "id": 132,
                "id_endpoint": 2,
                "name": "Eusebio (Portugal)",
                "ShortName": "Eusebio (Portugal)",
                "Gender": "Male",
                "code": "Eusebio",
                "language": "pt-PT"
            },
            {
                "id": 133,
                "id_endpoint": 2,
                "name": "Amalia (Portugal)",
                "ShortName": "Amalia (Portugal)",
                "Gender": "Female",
                "code": "Amalia",
                "language": "pt-PT"
            },
            {
                "id": 134,
                "id_endpoint": 2,
                "name": "Simona",
                "ShortName": "Simona",
                "Gender": "Female",
                "code": "Simona",
                "language": "ro-RO"
            },
            {
                "id": 135,
                "id_endpoint": 2,
                "name": "Milena",
                "ShortName": "Milena",
                "Gender": "Male",
                "code": "Milena",
                "language": "ru-RU"
            },
            {
                "id": 136,
                "id_endpoint": 2,
                "name": "Yuri",
                "ShortName": "Yuri",
                "Gender": "Female",
                "code": "Yuri",
                "language": "ru-RU"
            },
            {
                "id": 137,
                "id_endpoint": 2,
                "name": "Emil",
                "ShortName": "Emil",
                "Gender": "Male",
                "code": "emil(samuel22k)",
                "language": "sv-FI"
            },
            {
                "id": 138,
                "id_endpoint": 2,
                "name": "Erik",
                "ShortName": "Erik",
                "Gender": "Male",
                "code": "erik22k",
                "language": "sv-SE"
            },
            {
                "id": 139,
                "id_endpoint": 2,
                "name": "Maja",
                "ShortName": "Maja",
                "Gender": "Female",
                "code": "Maja",
                "language": "sv-SE"
            },
            {
                "id": 140,
                "id_endpoint": 2,
                "name": "Kerem",
                "ShortName": "Kerem",
                "Gender": "Male",
                "code": "Kerem",
                "language": "tr-TR"
            },
            {
                "id": 141,
                "id_endpoint": 2,
                "name": "Zeynep",
                "ShortName": "Zeynep",
                "Gender": "Female",
                "code": "Zeynep",
                "language": "tr-TR"
            },
            {
                "id": 142,
                "id_endpoint": 2,
                "name": "Liang (Mandarin)",
                "ShortName": "Liang (Mandarin)",
                "Gender": "Male",
                "code": "Liang",
                "language": "cmn-Hant-TW"
            },
            {
                "id": 143,
                "id_endpoint": 2,
                "name": "Hui (Mandarin)",
                "ShortName": "Hui (Mandarin)",
                "Gender": "Female",
                "code": "Hui",
                "language": "cmn-Hant-TW"
            },
            {
                "id": 144,
                "id_endpoint": 2,
                "name": "Kayan (Hong Kong)",
                "ShortName": "Kayan (Hong Kong)",
                "Gender": "Male",
                "code": "Kayan",
                "language": "yue-Hant-HK"
            },
            {
                "id": 145,
                "id_endpoint": 2,
                "name": "Kaho (Hong Kong)",
                "ShortName": "Kaho (Hong Kong)",
                "Gender": "Female",
                "code": "Kaho",
                "language": "yue-Hant-HK"
            },
            {
                "id": 146,
                "id_endpoint": 2,
                "name": "Somsi",
                "ShortName": "Somsi",
                "Gender": "Male",
                "code": "Somsi",
                "language": "th-TH"
            },
            {
                "id": 147,
                "id_endpoint": 2,
                "name": "Sarawut",
                "ShortName": "Sarawut",
                "Gender": "Female",
                "code": "Sarawut",
                "language": "th-TH"
            },
        ]
    )

    const [ voices, setVoices ] = useState()
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
                                        'vendor':'',
                                        'domain': 'it'
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
                                        'Source':'',
                                        'source':'',
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
        console.log(id);
        if (id) {
            var endpoint  = endpoints.filter((element) =>{
                return element.id === id
            })
            var param = JSON.parse(endpoint[0].url_param);
        }
        if (param) {
            var vendorVal
            var vendor = param.filter((element) =>{
                return element.name_param === "vendor"
            })
            vendorVal =  vendor[0].value
        }else{
            vendorVal =  ''
        }   

        if (e.target.dataset.type === "TTT"){
            setIdTTT(id)
            setLanguagesTTT(endpoint[0].languages)
            setJsonTTT({
                ...jsonTTT,"vendor" : vendorVal
            })
        }else if (e.target.dataset.type === "TTS"){
            setIdTTS(id)
            setLanguagesTTS(endpoint[0].languages)
            setJsonTTS({
                ...jsonTTS,"vendor" : vendorVal
            })
        }else if (e.target.dataset.type === "STT"){
            setIdSTT(id)
            setLanguagesSTT(endpoint[0].languages)
            setJsonSTT({
                ...jsonSTT,"vendor" : vendorVal
            })
        }
        
    }

    const fromLanguage = e =>{
        if (e.target.dataset.type === "TTT"){
            setJsonTTT({
                ...jsonTTT,"sourceLanguage" : e.target.value
            })
        }else if (e.target.dataset.type === "TTS"){
            var list  = voicesList.filter((element) =>{
                return element.language === e.target.value && element.id_endpoint === idTTS
            })
            setVoices(list)
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
            var base64 = reader.result.substring(22)
            setJsonSTT({
                ...jsonSTT,
                "file"   : base64,
                "Source" : base64,
                "source" : base64
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
            var base64 = reader.result.substring(22)
            setJsonSTT({
                ...jsonSTT,
                "file"   : base64,
                "Source" : base64,
                "source" : base64
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