import React, { useState, useEffect } from "react"

/*
    The context is imported and used by components
*/
export const LocationsContext = React.createContext()

/*  
    This establishes what can be used
*/

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])
    // useState returns [initial value of state variable, a function to set the value of the state variable]

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(response => response.json())
            .then(setLocations)
    }
}