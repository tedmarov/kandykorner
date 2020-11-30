import React from "react"
import { Route } from "react-router-dom"
import { LocationsProvider } from "./locations/LocationsProvider.js"
import { LocationsList } from "./locations/LocationsList.js"
import { ProductsProvider } from "./products/ProductsProvider.js"
import { ProductsList } from "./products/ProductsList.js"
import { ProductTypesProvider } from "./products/ProductTypesProvider.js"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationsProvider>
                {/*Render location list when lh3k */}
                <Route exact path="/">
                    <LocationsList />
                </Route>
            </LocationsProvider>

            <ProductsProvider>
                <ProductTypesProvider>
                    <Route path="/products">
                        <ProductsList />
                    </Route>
                </ProductTypesProvider>
            </ProductsProvider>
        </>
    )
}