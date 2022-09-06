import './App.css';
import Arbi from './img/arbi-6.png';
import Boton from './components/Boton';
import Contador from './components/Contador'
import {useState} from 'react'; //hooks

function App() {
const [numClics,setNumClics]= useState(0)

const sumar = ()=>{
  setNumClics(numClics + 1);
}
const restar = ()=>{
  setNumClics(numClics - 1);
}


  return (
    <div className="App">
    <div className='contenedor'>
      <img className='logo'
       src={Arbi}
       alt='foto de Arbi'/>
    </div>
    <main className='contenedor-main'>
       <section className='cont-elements'>
       
        <Boton 
        texto = 'Sumar'
        esBotonDe ={true}
        contFunct ={sumar} />
         <Contador 
        numCliks = {numClics} />
        <Boton 
        texto = 'Restar'
        esBotonDe ={false}
        contFunct = {restar} />
        </section> 
    </main>
    </div>
  );
}

export default App;
