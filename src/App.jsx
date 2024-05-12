import React, { useState, useEffect } from 'react';
import './App.css';
import TransformedComponent from './components/transform/Transform';
import HeaderFormBank from './components/transform/transformHeader/HeaderBank';

function App() {
  const [passValueBank, setPassValueBank] = useState('');
  const [passValueShop, setPassValueShop] = useState('');
  
  // Inicializa o título com base em openShop
  const [title, setTitle] = useState(false)
  // Atualiza o título quando openShop mudar
  useEffect(() => {
    console.log(title)
  }, []);
  
  const handleChange = (e) => {
    setPassValueBank(e.target.value);
    setPassValueShop(e.target.value);
  }

  return (
    <div>
      {title}
      <HeaderFormBank title={title}  setTitle={setTitle}/>
      {/* <HeaderFormShop /> */}
      <TransformedComponent 
        setValueBank={setPassValueBank}
        valuePassBank={passValueBank}
        setValueShop={setPassValueShop}
        valuePassShop={passValueShop}
        inputPass={() => (
          <input 
            type='password' 
            placeholder='password'
            value={passValueBank} 
            onChange={handleChange}
          />

        )} />
    </div>    
  );
}

export default App;
