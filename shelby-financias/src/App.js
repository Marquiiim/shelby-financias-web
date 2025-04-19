import styles from './Estilizy/Form.module.css';

function App() {
  return (
    <div className="App">
          <form>
            <fieldset>
              <legend>Dados do Indivíduo</legend>
              
              <input type='text'
              id='nome'
              name='nome'
              placeholder='Insira o nome'
              required/>

              <input type='value'
              id='valor'
              name='valor'
              placeholder='Insira o valor'
              required/>

              <input type='date'
              id='data'
              name='data'
              required/>
            </fieldset>
          </form>
        </div>
  );
}

export default App;
