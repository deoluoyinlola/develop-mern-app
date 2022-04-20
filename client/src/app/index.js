import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import RatesList from '../pages/RatesList'
import RatesInsert from '../pages/RatesInsert'
import RatesUpdate from '../pages/RatesUpdate'
//import { RatesList, RatesInsert, RatesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/rates/list" component={ RatesList }/>
                <Route path="/rates/create" exact component={ RatesInsert } />
                <Route
                    path="/rates/update/:id"
                    exact
                    component={RatesUpdate}
                />
            </Routes>
        </Router>
    )
}
//<Cadastro/>  RatesList
export default App