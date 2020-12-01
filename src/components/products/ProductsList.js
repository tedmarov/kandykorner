import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypesProvider.js"
import { ProductContext } from "./ProductsProvider.js"
import { Products } from "./Products.js"
import "./Products.css"

export const ProductsList = () => {
    //State changes when getProducts() is invoked
    console.log("Test")
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)
    const { products, getProducts } = useContext(ProductContext)

    /*
        Component mounted to the DOM. React renders blank first,
        then gets the data, then renders again.
    */
    useEffect(() => {
        console.log("Empty array is here")
        getProductTypes()
            .then(getProducts)
    }, [])

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

                    return < Products key={products.id}
                        productType={separator}
                        product={product} />
                })}
        </div>
    )
}
