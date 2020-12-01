import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kandy_customer")) {
                return (
                    <>
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)

/* <NavBar />
<ApplicationViews /> */

/* <>
<h2>Kandy Korner</h2>
<small>Kandy for kids</small>

<h2>Locations</h2>
<LocationsProvider>
<LocationsList />
</LocationsProvider>

<h2>Products</h2>
<ProductsProvider>
<ProductsList />
</ProductsProvider>
</>
) */