import React from 'react'
import Navigation from '../components/Navigation';
import "@kenshooui/react-multi-select/dist/style.css"
import MultiSelect from "@kenshooui/react-multi-select";


const Languages = ({
    items,
    selectedItems,
    onChange,
    onClick
}) => {

    return (
        <div className="App">
            <Navigation/>
            <div className="container mt-4">
                <div className="card shadow">
                    <div className="card-body row">
                        <div className="col-12 mb-2">
                            <h3 className="float-left">Selected Languages to API/Endpoint</h3>   
                        </div>
                        <div className="col-12">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                        <MultiSelect
                                            items={items}
                                            selectedItems={selectedItems}
                                            onChange={onChange}
                                        />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button 
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={onClick}
                                        >
                                            Save
                                        </button>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages