import React,{ useState, useEffect } from 'react'
import TestAdmin from './TestAdmin'
import Loading from '../components/Loading'
import FatalError from './500'
import url from '../config'

const TestAdminContainer = ({ history,match }) =>{

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ arrayHeader, setArrayHeader ] = useState()
    const [ arrayBody, setArrayBody ] = useState()
    const [ arrayUrl, setArrayUrl ] = useState()
    const [ arrayResult, setArrayResult ] = useState()
    const [ json, setJson ] = useState({})
    const [ file, setFile ] = useState(null)
    const [ form, setForm ] = useState({
        "name": '',
        "method": '',
        "translation_type": '',
        "url": '',
        "header_param":null,
        "body_param":null,
        "url_param":null,
        "header": null,
        "body": null,
        "description": null,
        "output": null,
    })
    const ruta = "/edit/"+match.params.id
    
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

                let res = await fetch(`${url}/apis/${match.params.id}`,config)
                let data = await res.json()
                setForm(data.api)
                setArrayHeader(JSON.parse(data.api.header_param))
                setArrayBody(JSON.parse(data.api.body_param))    
                setArrayUrl(JSON.parse(data.api.url_param))
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    },[])
    
    useEffect(() =>{
        const genereJson = () => {
            if (file) {
                var reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload = function () {
                    console.log(reader.result)
                    var result={}
                    Object.keys(json).forEach((key) => result[key] = json[key])
                    result["file"] = reader.result
                    setJson(result)
                }
                reader.onerror = function (error) {
                  console.log('Error: ', error)
                }            
            }
        }
        genereJson()
    },[file])
    
    useEffect(() =>{
        const genereJson = () => {
            const datos = {}
            if (arrayBody) {
                arrayBody.map((element,i) => {
                    if (element.value !== "-1" ) {
                        datos[element.name_param] = element.value
                    }else{
                        datos[element.name_param] = ""
                    }
                })
            }
            var result={}
            Object.keys(json).forEach((key) => result[key] = json[key])
            Object.keys(datos).forEach((key) => result[key] = datos[key])
            setJson(result)
        }
        genereJson()
    },[arrayBody])

    useEffect(() =>{
        const genereJson = () => {
            const datos = {}
            if (arrayUrl) {
                arrayUrl.map((element,i) => {
                    if (element.value !== "-1" ) {
                        datos[element.name_param] = element.value
                    }else{
                        datos[element.name_param] = ""
                    }
                })
            }
            var result={}
            Object.keys(json).forEach((key) => result[key] = json[key])
            Object.keys(datos).forEach((key) => result[key] = datos[key])
            setJson(result)
        }
        genereJson()
    },[arrayUrl])

    useEffect(() =>{
        const genereJson = () => {
            console.log("CAMBIO JSON....")
            console.log(json)
        }
        genereJson()
    },[json])

    const handleChangeHeader = e => {
        setJson({            
            ...json,[e.target.name] : e.target.value
        })
    }

    const handleDeleteApi = async id =>{
        if (window.confirm('¿ Seguro que desea borrar el Endpoint ?')){
            setLoading(true)
            try {
                let headers = {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            
                let config ={
                    method: 'DELETE',
                    headers:headers,
                }
        
                await fetch(`${url}/apis/${id}`, config)
                setLoading(false)
                history.push('/')
            } catch (error) {
                console.log("error...........")
                console.log(error)
                setLoading(true)
                setError(error)
            }
        }
    }

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
            let res  = await fetch(`${url}/apis/${match.params.id}/test`, config)
            if (form.translation_type === "Text to Text" || form.translation_type === "Speech to Text") {
                let data = await res.json()
                setArrayResult(data)    
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            if (error !== "TypeError: Failed to fetch") {
                setError(error)    
            }
            setArrayResult({"audio": "",})    
        }
    }

    const handleChangeFile = e => {
        console.log("CARGAR FILE")
        setFile(e.target.files[0])
    }

    const pruebas = () => {
        console.log("Array H...........")
        console.log(arrayHeader)
        console.log("Array B...........")
        console.log(arrayBody)
        console.log("Array U...........")
        console.log(arrayUrl)
        console.log("JSON...........")
        console.log(json)
        console.log("MIRAR")
        console.log(json["header param 1"])
        console.log("JSON STRING...........")
        console.log(JSON.stringify(json))
    }

    if(loading)
        return <Loading />

    if(error)
        return <FatalError />    

    return (
        <TestAdmin 
            id={match.params.id}
            ruta={ruta}
            form={form}
            data={json}
            arrayHeader={arrayHeader}
            arrayBody={arrayBody}
            arrayUrl={arrayUrl}
            arrayResult={arrayResult}
            onClick={handleDeleteApi}
            onChange={handleChangeHeader}
            onChangeFile={handleChangeFile}
            onSubmit={handleSubmit}
            pruebas={pruebas}
        />
    )
}

export default TestAdminContainer