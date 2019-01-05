import React from "react"
import Product from "./Product.js"

import prodList from "./vschoolProducts.js"

function ProdCont(){
    const prodComp = prodList.map(function(prod){
        return (
            <Product key={prod.id} product={prod} />
        )
    })
    return (
        <div>
            {prodComp}
        </div>
    )
}
export default ProdCont