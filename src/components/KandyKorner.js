import React from "react"
import { LocationsList } from "./locations/LocationsList.js"
import { LocationsProvider } from "./locations/LocationsProvider.js"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Kandy for kids</small>

        <h2>Locations</h2>
        <LocationsProvider>
            <LocationsList />
        </LocationsProvider>
    </>
)