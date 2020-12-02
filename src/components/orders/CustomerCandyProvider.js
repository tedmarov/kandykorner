import React, { useState, useEffect } from "react"

/*
    The context is imported and used by components
*/
export const CustomerCandyContext = React.createContext()

/*  
    This establishes what can be used
*/

export const CustomerCandyProvider = (props) => {
    const [customerCandy, setCustomerCandy] = useState([])
    // useState returns [initial value of state variable, 
    // a function to set the value of the state variable]

    const getCustomerCandy = () => {
        return fetch("http://localhost:8088/customerCandy")
            .then(response => response.json())
            .then(setCustomerCandy)
    }

    const addCustomerCandy = (CustomerCandy) => {
        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(CustomerCandy)
        })
            .then(getCustomerCandy)
    }

    /*
        You return a context provider wiht the customerCandy state,
        the addCustomerCandy function, and the getCustomerCandy function
        as keys. This allows access for any child elements.
    */
    return (
        <CustomerCandyContext.Provider value={{
            customerCandy, addCustomerCandy, getCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}