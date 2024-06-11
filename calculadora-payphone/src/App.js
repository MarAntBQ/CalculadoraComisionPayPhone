import logo from './logo.svg';
import './App.css';
import { DataAmmounts } from './components/DataAmmounts';
import { useState } from 'react';

function App() {

  const [valorInicial, setValorInicial] = useState(0, 0);
  const [comision, setComision] = useState(0, 0);
  const [valorCobrar, setValorCobrar] = useState(0, 0);

  const calculate = (e) => {
    console.log(e.target.value);
    let initialVal = parseInt(e.target.value);
    if (isNaN(initialVal)) {
      initialVal = 0;
      setValorInicial(0);
      setValorCobrar(0);
      setComision(0);
    } else {
      setValorInicial(initialVal);
      let valorCobrar = ((initialVal * 100) / 94).toFixed(2);
      setValorCobrar(parseFloat(valorCobrar));
      // Set Comission valorCobrar - valorInicial
      setComision(parseFloat(valorCobrar - initialVal).toFixed(2));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Aprende a calcular la comisión de PayPhone para cobrar el valor correcto</h3>
        <DataAmmounts valorInicial={valorInicial} comision={comision} valorCobrar={valorCobrar} />
        <p><input type='number' placeholder='Ingrese el Valor original' onInput={e => calculate(e)}/></p>
      </header>
    </div>
  );
}

export default App;
