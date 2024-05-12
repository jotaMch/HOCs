import React, { useState, useEffect } from "react";
import BankComponent from "../forms/Bank";
import ShopComponent from "../forms/Shop";

function withPasswordValidation(ComponentBank, ComponentShop) {
    return function WithPasswordValidation({ inputPass, ...props }) {
        const [charValue, setCharValue] = useState("");
        const [numberValue, setNumberValue] = useState("");

        useEffect(() => {
            const hasNumber = /\d/.test(props.value);
            const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(props.value);

            if (!hasNumber) {
                setNumberValue("A senha deve conter pelo menos um número");
            } else {
                setNumberValue("");
            }

            if (!hasSpecialChar) {
                setCharValue("A senha deve conter pelo menos um caractere especial");
            } else {
                setCharValue("");
            }
        }, [props.value]); // Executa o efeito sempre que o valor da senha mudar

        return (
            <>
                <ComponentBank 
                    {...props}
                    inputPass={inputPass} 
                    valChar={props.valuePassBank.length > 0 ? charValue : ""}
                    valNumber={props.valuePassBank.length > 0 ? numberValue : ""}
                />
                <ComponentShop 
                    {...props}
                    inputPass={inputPass} 
                    valChar={props.valuePassShop.length > 0 ? charValue : ""}
                    valNumber={props.valuePassShop.length > 0 ? numberValue : ""}
                />
            </>
        );
    };
}

const TransformedComponent = withPasswordValidation(BankComponent, ShopComponent);

export default TransformedComponent;
