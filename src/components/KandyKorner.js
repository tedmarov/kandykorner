import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)

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