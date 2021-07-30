import React from 'react';
import {BrowserRouter, NavLink, Route, Redirect} from "react-router-dom";
import AdminCategories from "./AdminCategories/AdminCategories";
import AdminWords from "./AdminWords/AdminWords";
import './Admin.scss'

const Admin = () => (
    <BrowserRouter>
        <div>
            <NavLink className="admin-link" activeClassName='activeLink' to='/adminCategories'>Categories</NavLink>
            <NavLink className="admin-link" activeClassName='activeLink' to='/adminWord'>Word</NavLink>
        </div>
        <Route path='/adminCategories' component={AdminCategories}/>
        <Redirect exact from="/" to="adminCategories" />
        <Route path='/adminWord' component={AdminWords}/>
        </BrowserRouter>
    )

export default Admin;
