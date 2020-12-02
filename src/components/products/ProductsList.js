import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypesProvider.js"
import { ProductContext } from "./ProductsProvider.js"
import { Products } from "./Products.js"
import { CustomerCandyContext } from "../orders/CustomerCandyProvider.js"
import "./Products.css"

export const ProductsList = (props) => {
    //State changes when getProducts() is invoked
    // console.log("Test")
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const { products, getProducts } = useContext(ProductContext)
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    /*
        Component mounted to the DOM. React renders blank first,
        then gets the data, then renders again.
    */
    useEffect(() => {
        // console.log("Empty array is here")
        getProductTypes()
            .then(getProducts)
    }, [])

    const constructNewOrder = (product) => {
        /*
            The `location` and variables below are
            the references attached to the input fields. You    
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const customerId = parseInt(localStorage.getItem("kandy_customer"))

        console.log(props)
        addCustomerCandy({
            customerId,
            productId: product.id
        })
            .then(() => props.history.push("/products"))
    }


    /*
        The effect it is responding to is that the product changed
    */
    // useEffect(() => {
    //     console.log("Empty array state change")
    //     console.log(products)
    // }, [products])

    return (
        <div className="products">
            <h2>Products</h2>
            {
                products.map(product => {
                    const separator = productTypes.find(pT => pT.id === product.productTypeId)

                    return (<div className="productCard">
                        < Products key={products.id}
                            productType={separator}
                            product={product}

                        />
                        <button className="btn--release"
                            onClick={() => {
                                constructNewOrder(product)
                            }}
                        >Purchase</button>
                    </div>
                    )
                })}
        </div>
    )
}
// Need to grab kandy_customer, addCustomerCandy in one go
// MAKE THE ORDERS RENDER
