import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import Test from '../pages/Test'
import NotFound from '../pages/404'

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/create" exact component={Create}/>
            <Route path="/edit/:id" exact component={Edit}/>
            <Route path="/test" exact component={Test}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App
