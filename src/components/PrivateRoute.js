//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in





import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component }) => {
    return <Route {...Component} render={(props) => {
        if (localStorage.getItem('token')) {
            return <Component {...props} />
        }
        else {
            return <Redirect {...alert('you need to login first')} to='/' />
        }
    }}  />
}

export default PrivateRoute;