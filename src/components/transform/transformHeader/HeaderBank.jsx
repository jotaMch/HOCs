

export default function HeaderFormBank({ title, setTitle }) {
    return(
        <header>
            <h1>
                {title? 'Cadastro Shop Rc' : 'Cadastro Banco Rc'}
            </h1>
            <button 
            type="button"
            onClick={() => {
                {title? setTitle(false) : setTitle(true)}
            }}>
                {title? 'Ir para Banco RC' : 'Ir para Loja Rc'}
                
            </button>
        </header>
    )
}