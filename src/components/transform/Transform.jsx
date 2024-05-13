import React, { useState, useEffect } from "react";
import BankComponent from "../forms/Bank";
import ShopComponent from "../forms/Shop";

function withPasswordValidation(ComponentBank, ComponentShop) {
    return function WithPasswordValidation({ inputPassBank, inputPassShop, valuePassBank, valuePassShop, ...props }) {
        const [charValueBank, setCharValueBank] = useState("");
        const [numberValueBank, setNumberValueBank] = useState("");

        const [charValueShop, setCharValueShop] = useState("");
        const [numberValueShop, setNumberValueShop] = useState("");

        const [lengthPass, setLengthPass] = useState("");
        const [confirmPass, setConfirmPass] = useState(true);

        useEffect(() => {
            const hasNumberBank = /\d/.test(valuePassBank);
            const hasSpecialCharBank = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(valuePassBank);
            
            if (!hasNumberBank) {
                setNumberValueBank("A senha deve conter pelo menos um número");
            } else {
                setNumberValueBank("");
            }

            if (!hasSpecialCharBank) {
                setCharValueBank("A senha deve conter pelo menos um caractere especial");
            } else {
                setCharValueBank("");
            }

        }, [valuePassBank]); 

        useEffect(() => {
            const hasNumberShop = /\d/.test(valuePassShop);
            const hasSpecialCharShop = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(valuePassShop);
        
            if (!hasNumberShop) {
                setNumberValueShop("A senha deve conter pelo menos um número");                                
                props.setBorderErro(true)
            } else {
                setNumberValueShop("");
                props.setBorderErro(false)
            }
        
            if (!hasSpecialCharShop) {
                setCharValueShop("A senha deve conter pelo menos um caractere especial");
                props.setBorderErro(true)
            } else {
                setCharValueShop("");
                props.setBorderErro(false)
            }
            
            if (valuePassShop.length < 10) {
                setLengthPass("A senha deve conter pelo menos 10 caracteres");
                props.setBorderErro(true)
            } else {
                setLengthPass("");
                props.setBorderErro(false)
            }

            const clickRegister = (e) => {
                e.preventdefault()


            } 
        }, [valuePassShop]);         

        return (
            <>
                <ComponentShop 
                    {...props}
                    inputPassShop={inputPassShop} 
                    valChar={valuePassShop.length > 0 ? charValueShop : ""} 
                    valNumber={valuePassShop.length > 0 ? numberValueShop : ""}
                    valuePassShop={valuePassShop}
                    confirmPass={confirmPass}
                    setConfirmPass={setConfirmPass}
                    lengthPass={valuePassShop.length > 0 ? lengthPass : ""}
                    borderErro={props.borderErro}
                />
                <ComponentBank 
                    {...props}
                    inputPassBank={inputPassBank} 
                    valChar={valuePassBank.length > 0 ? charValueBank : ""}
                    valNumber={valuePassBank.length > 0 ? numberValueBank : ""}
                />
            </>
        );
    };
}


const TransformedComponent = withPasswordValidation(BankComponent, ShopComponent);

export default TransformedComponent;
