import React from "react"
import { Route } from "react-router-dom"
import { LocationsProvider } from "./locations/LocationsProvider.js"
import { LocationsList } from "./locations/LocationsList.js"
import { ProductProvider } from "./products/ProductsProvider.js"
import { ProductsList } from "./products/ProductsList.js"
import { ProductTypesProvider } from "./products/ProductTypesProvider.js"
import { EmployeesProvider } from "./employees/EmployeesProvider.js"
import { EmployeesList } from "./employees/EmployeesList.js"
import { EmployeesForm } from "./employees/EmployeesForm.js"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationsProvider>
                {/*Render location list when lh3k */}
                <Route exact path="/">
                    <LocationsList />
                </Route>
            </LocationsProvider>

            <ProductProvider>
                <ProductTypesProvider>
                    <Route exact path="/products">
                        <ProductsList />
                    </Route>
                </ProductTypesProvider>
            </ProductProvider>

            <EmployeesProvider>
                <LocationsProvider>
                    <Route exact path="/employees" render={
                        props => <EmployeesList {...props} />
                    } />

                    <Route exact path="/employees/create" render={
                        props => <EmployeesForm {...props} />
                    } />
                </LocationsProvider>
            </EmployeesProvider >
        </>
    )
}