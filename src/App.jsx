// importaciones (Los componentes se deben importar en orden afabetico)
import React from 'react'
import Functions from './components/Functions'
import MathOpetations from './components/MathOperations'
import Numbers from './components/Numbers/Numbers.jsx'
import Result from './components/Result'
// estilos
import './components/assets/css/App.css'
import './components/Button/Button.css'


// generar componente -> Arrow function
const App = () => {
    // *debugger* para interrumpir y spervisar en una linea de código
    // lo que se ejecuta
    console.log("app renderizada")
    return (<main className="main-calculator"> 
                <div className="react-calculator">
                    <div>
                        <h1 className="calc-title">Calculadora</h1>
                        <Result value={"0"}></Result>
                    </div>
                    <Numbers onClickNumber={number => (
                        console.log(number)) 
                        }/>
                    <div className="functions">
                        <Functions 
                        clearFunction={funct => (
                            console.log("presionó ",funct)
                        )}
                        deleteFunction={funct => (
                            console.log("presionó ",funct)
                        )}
                        />
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