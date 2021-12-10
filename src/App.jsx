// importaciones (Los componentes se deben importar en orden afabetico)
import React from 'react'
import Button from './components/Button'
import MathOpetations from './components/MathOperations'
import Result from './components/Result'
// estilos
import './components/assets/css/App.css'


// generar componente -> Arrow function
const App = () => {
    // funcion del boton
    const clickHandlerFunction = number => { // los parametros en las funciones generalmene están entre (), pero si es solo un parametro puede dejarse solo 
        console.log(number)
    }

    // *debugger* para interrumpir y spervisar en una linea de código
    // lo que se ejecuta
    console.log("app renderizada")
    return (<main className="main-calculator"> 
                <div className="react-calculator">
                    <div>
                        <h1 className="calc-title">Calculadora</h1>
                        <Result value={"0"}></Result>
                    </div>
                    <div className="numbers">
                        <Button number="1" clickHandler={clickHandlerFunction}></Button>
                        <Button number="2" clickHandler={clickHandlerFunction}></Button>
                        <Button number="3" clickHandler={clickHandlerFunction}></Button>
                        <Button number="4" clickHandler={clickHandlerFunction}></Button>
                        <Button number="5" clickHandler={clickHandlerFunction}></Button>
                        <Button number="6" clickHandler={clickHandlerFunction}></Button>
                        <Button number="7" clickHandler={clickHandlerFunction}></Button>
                        <Button number="8" clickHandler={clickHandlerFunction}></Button>
                        <Button number="9" clickHandler={clickHandlerFunction}></Button>
                        <Button number="0" clickHandler={clickHandlerFunction}></Button>
                    </div>
                    <div className="functions">
                        <button>
                            C
                        </button>
                        <button>
                            R
                        </button>
                    </div>
                    <MathOpetations 
                        onClikOperation={operation => (
                            console.log("operación",operation)
                        )}
                        onClickEqual={operation => (
                            console.log("Botón de ",operation)
                        )}
                        />
                </div>
            </main>)
}

// exportar
export default App