import React from 'react';
import { Link } from 'react-router-dom'
import url from '../config'
import useFetch from '../hooks/useFetch'
import ActionEndPoint from '../components/ActionEndPoint'
import Dashboard from './Dashboard'
import Loading from '../components/Loading'
import FatalError from './500'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

const DashboardContainer = () => {
    const {data,loading,error} = useFetch(`${url}/apis`)
                    
    const columns = [
                        {
                            dataField: 'name',
                            text: 'Endpoint',
                            sort: true,
                            formatter: linkFormatter,
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
    
    function linkFormatter(cell, row, rowIndex, formatExtraData) { 
        return ( 
            <Link to="/test" >{row.name}</Link>
        )
    }

    function buttonFormatter(cell, row, rowIndex, formatExtraData) { 
        const ruta = "/edit/"+row.id
        return ( 
            < div 
                style={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: "normal" 
                }}
            >
                < ActionEndPoint
                    ruta={ruta}
                />
            </div> 
        )
    } 
    
    if(loading)
        return <Loading />

    if(error)
        return <FatalError />    

    return <Dashboard 
                data={data.apis}
                columns={columns}
            />
}

export default DashboardContainer