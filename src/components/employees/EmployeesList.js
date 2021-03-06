import React, { useContext, useEffect } from "react"
import { LocationContext } from "../locations/LocationsProvider.js"
import { EmployeeContext } from "./EmployeesProvider.js"
import { Employee } from "./Employees.js"
import "./Employees.css"

export const EmployeesList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        Component was "mounted" to the DOM. Needs to render blank
        HTML first, then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("employeeList: Initial render before data")
        getLocations()
            .then(getEmployees)
    }, [])

    /*
        This is responding to the employee state changed.
        */
    // useEffect(() => {
    //     console.log("employeeList: Employee state changed")
    //     console.log(employees)
    // }, [employees])

    return (
        <div className="employees">
            <h2>Employees</h2>
            <button onClick={() => props.history.push("/employees/create")}>
                Hire Button
            </button>
            <article>
                {employees.map(employee => {
                    const workplace = locations.find(l => l.id === employee.locationId)

                    return <Employee key={employee.id}
                        location={workplace}
                        employee={employee} />
                })}
            </article>
        </div>
    )
}