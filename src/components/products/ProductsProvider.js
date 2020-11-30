import React, { useState, useEffect } from "react"

/*
    The context is imported and used by components
*/
export const ProductContext = React.createContext()

/*  
    This establishes what can be used
*/

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])
    // useState returns [initial value of state variable, 
    // a function to set the value of the state variable]

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(response => response.json())
            .then(setProducts)
    }

    const addProduct = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    /*
        You return a context provider wiht the products state,
        the addProduct function, and the getProducts function
        as keys. This allows access for any child elements.
    */
    return (
        <ProductContext.Provider value={{
            products, addProduct, getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}