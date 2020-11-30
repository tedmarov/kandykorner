import React from "react"
import "./Employees.css"

export const Employee = ({ employee, location }) => {
    return (
        <section className="employee">
            <h3 className="employee__name">Employee: {employee.name}</h3>
            <address className="employee__location">Location: {location.address}</address>
            <address className="employee__managerStatus">Manager: {employee.isManager ? "true" : "false"}</address>
            <address className="employee__workStatus">Full Time: {employee.isFullTime ? "true" : "false"}</address>
            <address className="employee__pay">Pay Rate: {employee.hourlyRate}</address>
        </section>
    )
}