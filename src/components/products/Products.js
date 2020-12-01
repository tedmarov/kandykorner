import React from "react"
import "./Products.css"

export const Products = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__price">Price: {product.price}</address>
        <address className="product__productTypeId">Product Type: {productType.candy}</address>
        <button type="submit"
            // onClick={
            //     {
            //         constructNewOrder()
            //     }}
            className="btn btn-primary">
            Purchase
            </button>
    </section>
)   