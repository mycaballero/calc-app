// importaciones
import React from 'react'
import Result from './components/Result'
// estilos
import './components/css/App.css'


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
                    <div className="numbers">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>0</button>
                    </div>
                    <div className="functions">
                        <button>
                            C
                        </button>
                        <button>
                            R
                        </button>
                    </div>
                    <div className="math-operations">
                        <button>+</button>
                        <button>-</button>
                        <button>*</button>
                        <button>/</button>
                        <button>=</button>
                    </div>
                </div>
            </main>)
}

// exportar
export default App