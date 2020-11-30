import React, { useContext, useEffect } from "react"
import { ProductTypesContext } from "./ProductTypesProvider.js"
import { ProductsContext } from "./ProductsProvider.js"
import { Products } from "./Products.js"
import "./Products.css"

export const ProductsList = () => {
    //State changes when getProducts() is invoked
    const { productTypes, getProductTypes } = useContext(ProductTypesContext)
    const { products, getProducts } = useContext(ProductsContext)

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
