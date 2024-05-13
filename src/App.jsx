import React, { useState, useEffect } from 'react';
import './App.css';
import TransformedComponent from './components/transform/Transform';
import HeaderFormBank from './components/transform/transformHeader/HeaderBank';

function App() {
  const [passValueBank, setPassValueBank] = useState('');
  const [passValueShop, setPassValueShop] = useState('');
  const [borderErro, setBorderErro] = useState(false);
  
  const [title, setTitle] = useState(false)
  
  const handleChangeBank = (e) => {
    setPassValueBank(e.target.value);
  }
  
  const handleChangeShop = (e) => {
    setPassValueShop(e.target.value);
    console.log(passValueShop.length)
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
        setBorderErro={setBorderErro}
        borderErro={borderErro}

        inputPassBank={() => (
          <input 
            type='password' 
            placeholder='password'
            value={passValueBank} 
            onChange={handleChangeBank}
          />
        )} 
        inputPassShop={() => (
          <input 
            className={borderErro && passValueShop.length > 0 ? "border-red" : ""}
            type='password' 
            placeholder='password'
            value={passValueShop} 
            onChange={handleChangeShop}
          />
        )} 
        />
    </div>    
  );
}

export default App;
