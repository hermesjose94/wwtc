import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Navigation from '../components/Navigation';
import AddEndPoint from '../components/AddEndPoint';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const Dashboard = ({data,columns}) => {
    
    const { SearchBar } = Search;

    const defaultSorted = [{
        dataField: 'endpoint',
        order: 'asc'
    }];
    
    return(
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
                        data={ data } 
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
}

export default Dashboard