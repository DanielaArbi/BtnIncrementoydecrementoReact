import '../styles/Boton.css'

function Boton ({ texto,esBotonDe, contFunct }){
    return(
        <button className={ esBotonDe ? 'btnSumar' : 'btnRestar'}
        onClick={contFunct}>
            {texto}
        </button>
    );

}

export default Boton;