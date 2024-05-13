import React, { useEffect, useState } from "react";

function ShopComponent({ inputPassShop, valChar, valNumber, valuePassShop, setConfirmPass, confirmPass, lengthPass }) {
    const clickRegister = () => {
        
    }
    return (
        <>
            <form>
                <h3>Cadastre-se em nossa plataforma Rc</h3>
                <input type="text" placeholder="Seu nome" />
                <input type="email" placeholder="E-mail" />
                <input type="number" placeholder="(00) 00000-0000" />
                {inputPassShop()}
                <span>{valChar}</span>
                <span>{valNumber}</span>
                <span>{lengthPass}</span>
                <input
                    type="password"
                    placeholder="confirm password"
                    onChange={(e) => {
                        const confirmPassword = e.target.value;
                        // Verifica se a senha de confirmação corresponde à senha original
                        setConfirmPass(confirmPassword === valuePassShop);
                    }}
                />
                {!confirmPass && <span>As senhas não correspondem</span>}
                <button type="submit" onClick={clickRegister}>
                    Cadastre-se
                </button>
            </form>
        </>
    );
}

export default ShopComponent;
