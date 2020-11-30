import React, { useState, useEffect } from "react"

/*
    The context is imported and used by components
*/
export const ProductTypesContext = React.createContext()

/*  
    This establishes what can be used
*/

export const ProductTypesProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])
    // useState returns [initial value of state variable, 
    // a function to set the value of the state variable]

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(response => response.json())
            .then(setProductTypes)
    }

    const addProductType = productType => {
        return fetch("http://localhost:8088/productTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productType)
        })
            .then(getProductTypes)
    }

    /*
        You return a context provider wiht the products state,
        the addProduct function, and the getProducts function
        as keys. This allows access for any child elements.
    */
    return (
        <ProductTypesContext.Provider value={{
            productTypes, addProductType, getProductTypes
        }}>
            {props.children}
        </ProductTypesContext.Provider>
    )
}