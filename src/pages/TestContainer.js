import React,{ useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import url from '../config'
import Test from './Test'

const TestContainer = () => {
    
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ languages, setLanguages ] = useState()
    const [ endpoints, setEndpoints ] = useState()
    const [ result, setResult ] = useState()
    const [ id, setId ] = useState()
    const [ json,setJson ] = useState({
                                        'Authorization': '',
                                        'Text':'',
                                        'sourceLanguage':'',
                                        'targetLanguage':'',
                                        'vendor':''
                                    })
    
    const selectEndpoint = e => {
        var id = e.target.value
        setId(id)
        var array = endpoints.filter(function (element) {
            return element.id == id
        })
        var auth = JSON.parse(array[0]["header_param"]).filter(function (element) {
            return element.name_param === "Authorization"
        })
        setJson({
            ...json,"Authorization" : auth[0].value
        })
    }

    const selectProvider = e =>{
        setJson({
            ...json,"vendor" : e.target.value
        })
    }

    const fromLanguage = e =>{
        setJson({
            ...json,"sourceLanguage" : e.target.value
        })
    }

    const toLanguage = e =>{
        setJson({
            ...json,"targetLanguage" : e.target.value
        })
    }

    const handleChangeText = e =>{
        setJson({
            ...json,"Text" : e.target.value
        })
    }

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

                let res = await fetch(`${url}/languages`,config)
                let data = await res.json()
                setLanguages(data.languages)

                let res2 = await fetch(`${url}/apis`)
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

    const handleSubmit = async e => {
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
                body: JSON.stringify(json)
            }
            let res  = await fetch(`${url}/apis/${id}/test`, config)
            let data = await res.json()
            setResult(data)  
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const pruebas = () => {
        
        console.log("JSON...........")
        console.log(json)
        console.log("JSON STRING...........")
        console.log(JSON.stringify(json))
    }
    
    if(loading)
    return <Loading />

    if(error)
        return <FatalError />    

    return (
        <Test
            languages={languages}
            endpoints={endpoints}
            json={json}
            result={result}
            selectEndpoint={selectEndpoint}
            selectProvider={selectProvider}
            fromLanguage={fromLanguage}
            toLanguage={toLanguage}
            ChangeText={handleChangeText}
            handleSubmit={handleSubmit}
            pruebas={pruebas}
        />
    )
}

export default TestContainer