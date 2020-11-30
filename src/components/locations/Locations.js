import React from "react"
import "./Locations.css"

export const Locations = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">Location: {location.address}</address>
        <address className="location__sqfeet">Square Footage: {location.squareFootage}</address>
        <address className="location__handicap">Handicap Accessible: {location.handicapAccessible ? "true" : "false"}</address>
    </section>
)   