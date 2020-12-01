import React, { useState, useEffect } from "react"

/*
    The context is imported and used by components
*/
export const LocationContext = React.createContext()

/*  
    This establishes what can be used
*/

export const LocationsProvider = (props) => {
    const [locations, setLocations] = useState([])
    // useState returns [initial value of state variable, 
    // a function to set the value of the state variable]

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(response => response.json())
            .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        You return a context provider wiht the locations state,
        the addLocation function, and the getLocation function
        as keys. This allows access for any child elements.
    */
    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}