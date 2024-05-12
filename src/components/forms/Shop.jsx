import React from "react";

function ShopComponent({inputPass, valChar, valNumber}) {
    return(
        <>
            <form >
                <h3>Shop</h3>
                <input type="text" />
                <input type="email" />
                <input type="number" />
                {inputPass()}
                <span>{valChar}</span>
                <span>{valNumber}</span>
                <input type="password" />
                <button>Register 2</button>
            </form>
        </>
    )
}

export default ShopComponent;