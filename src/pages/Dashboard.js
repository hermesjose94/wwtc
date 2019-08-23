import React from 'react'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import Navigation from '../components/Navigation';
import AddEndPoint from '../components/AddEndPoint';
import ActionEndPoint from '../components/ActionEndPoint';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Link } from 'react-router-dom'

const { SearchBar } = Search;

var products = [
                    {
                        id: 1,
                        endpoint: "Sample Endpoint 1",
                        url: 'http://wwtc.com/api/v1/transactions',
                        type: 'Text-to-Text'
                    },
                    {
                        id: 2,
                        endpoint: "Sample Endpoint 2",
                        url: 'http://wwtc.com/api/v2/transactions',
                        type: 'Text-to-Speech'
                    },
                    {
                        id: 3,
                        endpoint: "Sample Endpoint 3",
                        url: 'http://wwtc.com/api/v3/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 4,
                        endpoint: "Sample Endpoint 4",
                        url: 'http://wwtc.com/api/v4/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 5,
                        endpoint: "Sample Endpoint 5",
                        url: 'http://wwtc.com/api/v5/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 6,
                        endpoint: "Sample Endpoint 6",
                        url: 'http://wwtc.com/api/v6/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 7,
                        endpoint: "Sample Endpoint 7",
                        url: 'http://wwtc.com/api/v7/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 8,
                        endpoint: "Sample Endpoint 8",
                        url: 'http://wwtc.com/api/v8/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 9,
                        endpoint: "Sample Endpoint 9",
                        url: 'http://wwtc.com/api/v9/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 10,
                        endpoint: "Sample Endpoint 10",
                        url: 'http://wwtc.com/api/v10/transactions',
                        type: 'Speech-to-Text'
                    },
                    {
                        id: 11,
                        endpoint: "Sample Endpoint 11",
                        url: 'http://wwtc.com/api/v11/transactions',
                        type: 'Speech-to-Text'
                    }
                ];
                
const columns = [
                    {
                        dataField: 'endpoint',
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
                        dataField: 'type',
                        text: 'Type',
                        sort: true,
                    }, 
                    {
                        dataField: "actions", 
                        text: "Actions",
                        sort: false,
                        formatter: buttonFormatter,
                    }
                ];
const defaultSorted = [{
    dataField: 'endpoint',
    order: 'desc'
}];

const rowEvents = {
    onClick: (e, row, rowIndex) => {
        console.log(row);
    }
};

function linkFormatter(cell, row, rowIndex, formatExtraData) { 
    return ( 
        <Link to="/test" >{row.endpoint}</Link>
    ); 
}

function buttonFormatter(cell, row, rowIndex, formatExtraData) { 
    console.log(row.id);
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
    ); 
} 

const Dashboard = () => (
    <div className="App">
        <Navigation/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 mb-4">
                    <AddEndPoint /> 
                </div>
                <div className="col-12 mb-2">
                    <ToolkitProvider
                        bootstrap4
                        keyField='id' 
                        data={ products } 
                        columns={ columns } 
                        search
                        >
                        {
                            props => (
                            <div>
                                <div className="row">
                                    <div className="col-8">
                                        <h2 className="float-left">APIs Dashboard</h2>   
                                    </div>
                                    <div className="col-4">
                                        <SearchBar { ...props.searchProps } />
                                    </div>
                                </div>
                                <hr />
                                <BootstrapTable
                                    { ...props.baseProps }
                                    rowEvents={ rowEvents }
                                    defaultSorted={ defaultSorted }
                                    pagination={ paginationFactory() }
                                />
                            </div>
                            )
                        }
                    </ToolkitProvider>
                </div>
            </div>
        </div>
    </div>
)

export default Dashboard