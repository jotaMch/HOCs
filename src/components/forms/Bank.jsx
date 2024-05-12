import React from "react";

export default function BankComponent({inputPass, valChar, valNumber}) {
    return(
        <>
            <form >
                <h3>bank</h3>
                <input type="text" />
                <input type="email" />
                <input type="number" />
                {inputPass()}
                <span>{valChar}</span>
                <span>{valNumber}</span>
                <input type="password" />
                <button>Register 1</button>
            </form>
        </>
    )
}