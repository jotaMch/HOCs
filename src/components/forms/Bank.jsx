import React from "react";

export default function BankComponent({inputPassBank, valChar, valNumber}) {
    return(
        <>
            <form >
                <h2>Crie seu perfil</h2>
                <h3>Banco digital da Rc</h3>
                
                <label htmlFor="password">Informações para contato:</label>
                <input type="text" placeholder="Nome completo" />
                <input type="email" placeholder="E-mail" />
                <input type="number" placeholder="(00) 00000-0000" />

                
                <label htmlFor="password">Sexo:</label>
                <select name="sexo" id="">
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">outro</option>
                </select>

                <label htmlFor="idade">Você é maior de 18 anos</label>
                <div className="radio-btn">
                    <div className="flex">
                        <input type="radio" id="sim" name="idade" />
                        <label htmlFor="sim">Sim</label>
                    </div>
                    <div className="flex">
                        <input type="radio" id="nao" name="idade" />
                        <label htmlFor="nao">Não</label>
                    </div>
                </div>

                <label htmlFor="password">Endereço:</label>
                <input type="text" placeholder="Cidade " />
                <input type="text" placeholder="Complemento" />

                <label htmlFor="password">Crie sua senha:</label>
                {inputPassBank()}
                <span>{valChar}</span>
                <span>{valNumber}</span>
                <input 
                type="password" 
                placeholder="Confirm password" 
                />
                <button>Criar perfil</button>
            </form>
        </>
    )
}