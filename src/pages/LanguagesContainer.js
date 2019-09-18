import React,{ useState, useEffect } from 'react'
import Language from './Languages'
import Loading from '../components/Loading'
import FatalError from './500'
import Config from '../config'

const LanguagesContainer = ({match}) => {

    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)    
    const [ items , setItems] = useState()
    const [ selectedItems, setSelectedItems ] = useState()                                        
    const [ langauges, setLanguages ] = useState()

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
                var items2 = []
                data.languages.map((element) => {
                    const item = { id: "", label: "" }
                    item.id = element.id
                    item.label = element.name + " - (" + element.code + ")"
                    items2.push(item)
                }) 
                setItems(items2) 
                
                let resE = await fetch(`${Config.url}/apis/${match.params.id}`,config)
                let dataE = await resE.json()
                var selectedItems2 = []
                dataE.api.languages.map((element) => {
                    const item = { id: "", label: "" }
                    item.id = element.id
                    item.label = element.name + " - (" + element.code + ")"
                    selectedItems2.push(item)
                }) 
                setSelectedItems(selectedItems2)
                
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    },[])

    const handleChange =(selectedItems) =>{
        const ids = []
        selectedItems.map((element) => {
            ids.push(element.id)
        }) 
        setLanguages(ids)
        setSelectedItems(selectedItems)
    }

    const handleClick = async e => {
        console.log("Send langauges")
        setLoading(true)
        const json = {"id_languages" : langauges}
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
            let res  = await fetch(`${Config.url}/apis/${match.params.id}/add-languages`, config)
            let data = await res.json()
            console.log(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    }

    if(loading)
        return <Loading />

    if(error)
        return <FatalError />    

    return <Language
                items={items}
                selectedItems={selectedItems}
                onChange={handleChange}
                onClick={handleClick}
            />
}

export default LanguagesContainer