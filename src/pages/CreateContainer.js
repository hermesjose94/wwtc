import React,{ useState, useEffect } from 'react'
import Create from './Create'
import Loading from '../components/Loading'
import FatalError from './500'
import Config from '../config'

const CreateContainer = ({history}) => {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ posHeader, setPosHeader ] = useState(0)
    const [ posBody, setPosBody ]     = useState(0)
    const [ posUrl, setPosUrl ]       = useState(0)
    const [ endpoints, setEndpoints ] = useState()

    const [ arrayHeader, setArrayHeader ] = useState(
        [
            {
                "name_param": '',
                "type": '',
                "value": ''
            },
        ]
    )

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

                let res = await fetch(`${Config.url}/apis?type=Token`,config)
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

    useEffect(() => {    
        if (arrayHeader.length > 0) {
            setForm({            
                ...form,"header_param" : JSON.stringify(arrayHeader)
            })
        } else {
            setForm({            
                ...form,"header_param" : null
            })
        }
    }, [arrayHeader])

    const [ arrayBody, setArrayBody ] = useState(
        [
            {
                "name_param": '',
                "type": '',
                "value": ''
            },
        ]
    )

    useEffect(() => {  
        if (arrayBody.length > 0) {
            setForm({            
                ...form,"body_param" : JSON.stringify(arrayBody)
            })    
        } else {
            setForm({            
                ...form,"body_param" : null
            })
        }
    }, [arrayBody])

    const [ arrayUrl, setArrayUrl ] = useState(
        [
            {
                "name_param": '',
                "type": '',
                "value": ''
            },
        ]
    )

    useEffect(() => {  
        if (arrayUrl.length > 0) {
            setForm({            
                ...form,"url_param" : JSON.stringify(arrayUrl)
            })    
        } else {
            setForm({            
                ...form,"url_param" : null
            })
        }
    }, [arrayUrl])

    const [ form, setForm ] = useState(
        {
            "name": '',
            "method": '',
            "translation_type": '',
            "url": '',
            "header_param":JSON.stringify(arrayHeader),
            "body_param":JSON.stringify(arrayBody),
            "url_param":JSON.stringify(arrayUrl),
            "header": null,
            "body": null,
            "description": null,
            "output": null,
            "id_api_token":"",
        }
    )

    //Header Params

    const handleAddHeaderElements = e =>{
        var pos = posHeader + 1
        setPosHeader(pos)
        var newElemnt =  {
            name_param: '',
            type: '',
            value: ''
        }
        setArrayHeader([...arrayHeader,newElemnt])
    }

    const handleRemoveHeaderElements = (index) =>{
        if (window.confirm('¿ Seguro que desea borrar el header param ?')){
            setArrayHeader(
                        arrayHeader.filter((element,i) =>{
                            return i !== index
                        })
                    )
        }
    }

    const handleChangeHeader = e => {
        var array = arrayHeader
        if (e.target.dataset.type === "1") {
            array[e.target.dataset.pos].name_param = e.target.value    
        }else if (e.target.dataset.type === "2"){
            array[e.target.dataset.pos].value      = e.target.value
        }else if (e.target.dataset.type === "3"){
            array[e.target.dataset.pos].type       = e.target.value
        }
        setArrayHeader(array)
        setForm({            
            ...form,"header_param" : JSON.stringify(arrayHeader)
        })
    }

    //Body Params

    const handleAddBodyElements = e =>{
        var pos = posBody + 1
        setPosBody(pos)
        var newElemnt =  {
            name_param: '',
            type: '',
            value: ''
        }
        setArrayBody([...arrayBody,newElemnt])
    }

    const handleRemoveBodyElements = (index) =>{
        if (window.confirm('¿ Seguro que desea borrar el body param ?')){
            setArrayBody(
                        arrayBody.filter((element,i) =>{
                            return i !== index
                        })
                    )
        }
    }

    const handleChangeBody = e => {
        var array = arrayBody
        if (e.target.dataset.type === "1") {
            array[e.target.dataset.pos].name_param = e.target.value    
        }else if (e.target.dataset.type === "2"){
            array[e.target.dataset.pos].value      = e.target.value
        }else if (e.target.dataset.type === "3"){
            array[e.target.dataset.pos].type       = e.target.value
        }
        setArrayBody(array)
        setForm({            
            ...form,"body_param" : JSON.stringify(arrayBody)
        })
    }

    //URL Params

    const handleAddUrlElements = e =>{
        var pos = posUrl + 1
        setPosUrl(pos)

        var newElemnt =  {
            name_param: '',
            type: '',
            value: ''
        }
        setArrayUrl([...arrayUrl,newElemnt])
    }

    const handleRemoveUrlElements = (index) =>{
        if (window.confirm('¿ Seguro que desea borrar el url param ?')){
            setArrayUrl(
                        arrayUrl.filter((element,i) =>{
                            return i !== index
                        })
                    )    
        }
    }

    const handleChangeUrl = e => {
        var array = arrayUrl

        if (e.target.dataset.type === "1") {
            array[e.target.dataset.pos].name_param = e.target.value    
        }else if (e.target.dataset.type === "2"){
            array[e.target.dataset.pos].value      = e.target.value
        }else if (e.target.dataset.type === "3"){
            array[e.target.dataset.pos].type       = e.target.value
        }
        setArrayUrl(array)
        setForm({            
            ...form,"url_param" : JSON.stringify(arrayUrl)
        })
    }

    //Otros

    const handleChange = e => {
        setForm({            
            ...form,[e.target.name] : e.target.value
        })
    }

    const handleChangeJson = e => {
        setForm({            
            ...form,[e.target.name] : JSON.stringify(e.target.value)
        })
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
                body: JSON.stringify(form)
            }
            await fetch(`${Config.url}/apis`, config)
            setLoading(false)
            history.push('/')
        } catch (error) {
            console.log(error)
            setLoading(true)
            setError(error)
        }
        
    }

    const pruebas = () => {
        console.log("Array H...........")
        console.log(arrayHeader)
        console.log("Array B...........")
        console.log(arrayBody)
        console.log("Array U...........")
        console.log(arrayUrl)
        console.log("JSON...........")
        console.log(form)
        console.log("JSON STRING...........")
        console.log(JSON.stringify(form))
    }
    if(loading)
        return <Loading />

    if(error)
        return <FatalError />    

    return (        
            <Create 
                endpoints={endpoints}
                arrayHeader={arrayHeader}
                arrayBody={arrayBody}
                arrayUrl={arrayUrl}
                form={form}
                handleAddHeaderElements={handleAddHeaderElements}
                handleRemoveHeaderElements={handleRemoveHeaderElements}
                handleChangeHeader={handleChangeHeader}
                handleAddBodyElements={handleAddBodyElements}
                handleRemoveBodyElements={handleRemoveBodyElements}
                handleChangeBody={handleChangeBody}
                handleAddUrlElements={handleAddUrlElements}
                handleRemoveUrlElements={handleRemoveUrlElements}
                handleChangeUrl={handleChangeUrl}
                handleChange={handleChange}
                handleChangeJson={handleChangeJson}
                handleSubmit={handleSubmit}
                pruebas={pruebas}
            />
    )
}

export default CreateContainer


