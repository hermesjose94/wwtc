import React,{ useState, useEffect } from 'react'
import Config from '../config'
import ActionEndPoint from '../components/ActionEndPoint'
import Token from './Token'
import Loading from '../components/Loading'
import FatalError from './500'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

const TokenContainer = ({history}) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const token = true;

    const columns = [
        {
            dataField: 'name',
            text: 'Endpoint',
            sort: true,
        }, 
        {
            dataField: 'url',
            text: 'URL',
            sort: true,
        }, 
        {
            dataField: 'translation_type',
            text: 'Type',
            sort: true,
        }, 
        {
            dataField: "actions", 
            text: "Actions",
            sort: false,
            formatter: buttonFormatter,
        }
    ]

    useEffect(() =>{
        const fetchResource = async () => {
            try {
                let res = await fetch(`${Config.url}/apis?type=Token`)
                let data = await res.json()
                
                setData(data.apis)
                setLoading(false)
                   
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    },[])


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
        
                await fetch(`${Config.url}/apis/${id}`, config)
                setData(
                    data.filter((element) =>{
                        return element.id !== id
                    })
                )
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
    
    function buttonFormatter(cell, row, rowIndex, formatExtraData) { 
        const ruta = "/edit/"+row.id
        const ruta2 = "/admin/test/"+row.id
        const ruta3 = "/languages/"+row.id
        const id = row.id
        return ( 
            < div 
                style={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: "normal" 
                }}
            >
                < ActionEndPoint
                    id={id}
                    ruta={ruta}
                    ruta2={ruta2}
                    ruta3={ruta3}
                    onClick={handleDeleteApi}
                    token={token}
                />
            </div> 
        )
    } 
    
    if(loading)
        return <Loading />

    if(error)
        return <FatalError />    

    return <Token 
                data={data}
                columns={columns}
            />
}

export default TokenContainer