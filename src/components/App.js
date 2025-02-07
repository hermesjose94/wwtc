import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/DashboardContainer'
import Tokens from '../pages/TokenContainer'
import Create from '../pages/CreateContainer'
import Edit from '../pages/EditContainer'
import Languages from '../pages/LanguagesContainer'
import Test from '../pages/TestContainer'
import TestAdmin from '../pages/TestAdminContainer'
import NotFound from '../pages/404'

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/create" exact component={Create}/>
            <Route path="/edit/:id" exact component={Edit}/>
            <Route path="/test" exact component={Test}/>
            <Route path="/admin/test/:id" exact component={TestAdmin}/>
            <Route path="/languages/:id" exact component={Languages}/>
            <Route path="/tokens" exact component={Tokens}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App
