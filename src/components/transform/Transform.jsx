import React, { useState, useEffect } from "react";
import BankComponent from "../forms/Bank";
import ShopComponent from "../forms/Shop";

function withPasswordValidation(ComponentBank, ComponentShop) {
    return function WithPasswordValidation({ inputPassBank, inputPassShop, valuePassBank, valuePassShop, ...props }) {
        const [charValueBank, setCharValueBank] = useState("");
        const [numberValueBank, setNumberValueBank] = useState("");

        
        const [idadeSelecionada, setIdadeSelecionada] = useState(false);
        const [registerOk, setRegisterOk] = useState(true);

        const [charValueShop, setCharValueShop] = useState("");
        const [numberValueShop, setNumberValueShop] = useState("");

        const [lengthPass, setLengthPass] = useState("");
        const [confirmPass, setConfirmPass] = useState(true);

        const [valueConfirm, setValueConfirm] = useState("")
        const [messegeCheck, setMessegeCheck] = useState(false);

        const [errorPassword, setErrorPassword] = useState("");


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

            
        }, [valuePassShop]);    
        
        const clickRegister = (e) => {    

            const hasNumberShop = /\d/.test(valuePassShop);
            const hasSpecialCharShop = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(valuePassShop);
            const isPasswordLongEnough = valuePassShop.length >= 10;
        
        
            if (hasNumberShop && hasSpecialCharShop && isPasswordLongEnough && valueConfirm === valuePassShop) {
                setMessegeCheck(true);
            } else {
                alert("A senha não atende aos critérios de validação");
                return props.setBorderErro(true)
            } 
        }
        
        
        
        const clickConfirmBank = (e) => {
            e.preventDefault()
            if(valuePassBank !== valuePassShop){
                setErrorPassword("Sua senha está incorreta!")
                setMessegeCheck(true);
            } else {
                setErrorPassword("Sua senha está correta!")
                setTimeout(() => {
                    setRegisterOk(false)
                }, 1000);
            }
            if (!idadeSelecionada) {
                alert("Por favor, selecione se você é maior de 18 anos.");
                
            }
        }
        
        return (
            <div className="forms-content">   
                {registerOk &&  
                !messegeCheck &&
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
                    messegeCheck={messegeCheck}
                    clickRegister={clickRegister}
                    setValueConfirm={setValueConfirm}
                />}
                
                {registerOk &&  messegeCheck &&
                <ComponentBank 
                    {...props}
                    inputPassBank={inputPassBank} 
                    clickConfirmBank={clickConfirmBank}
                    errorPassword={errorPassword}
                    setIdadeSelecionada={setIdadeSelecionada}
                />}
                {!registerOk && <p className="parabens">Parabéns, gora você faz parte da Rc Bank</p>}
            </div>
        );
    };
}


const TransformedComponent = withPasswordValidation(BankComponent, ShopComponent);

export default TransformedComponent;
