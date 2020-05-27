import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import slugify from 'slugify'
import './App.scss'
import { routes } from './routes'

const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route key={slugify(route.path)} path={route.path} exact={route.exact}>
                        <route.main />
                    </Route>
                ))}
            </Switch>
        </Router>
    )
}

export default App
