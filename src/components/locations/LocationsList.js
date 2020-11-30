import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider.js"
import { Locations } from "./Locations.js"
import "./Locations.css"

export const LocationsList = () => {
    //State changes when getLocations() is invoked
    const { locations, getLocations } = useContext(LocationContext)

    /*
        Component mounted to the DOM. React renders blank first,
        then gets the data, then renders again.
    */
    useEffect(() => {
        console.log("Empty array is here")
        getLocations()
    }, [])

    /*
        The effect it is responding to is that the location changed
    */
    useEffect(() => {
        console.log("Empty array state change")
        console.log(locations)
    }, [locations])

    return (
        <div className="locations">
            {
                locations.map(l => <Locations key={l.id} location={l} />)
            }
        </div>
    )
}
