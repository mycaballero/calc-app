// para el warning de eslint que genera el aviso de la función eval
/* eslint no-eval: 0 */

// importaciones (Los componentes se deben importar en orden afabetico)
import React, {useState} from 'react' // Se pueden importar recursos de un componente con Option Destrcturing
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOpetations from './components/MathOperations'
import Numbers from './components/Numbers/Numbers.jsx'
import Result from './components/Result'
// estilos
import './components/assets/css/App.css'
import './components/Button/Button.css'

// generar componente -> Arrow function
const App = () => {
// Hooks "useState" // usaremmps array Destructuring pero dejaré el original como cmentaio
/*
    const arrayTextFunctionModifyText = useState("")

// separados arrayTextFunctionModifyText["Texto", Función]

    // 1° posición devuelve un valor(en este caso es "")
    const arrayText = arrayTextFunctionModifyText[0]
    // 2° devuelve una función que modificrá el valor
    const fModify = arrayTextFunctionModifyText[1]
*/
// hook "useState" + array Destructuing + Mejora de nombres [xxxx, setxxxx] lo ideal
const [nNumber, setNnumber] = useState("")
// usamos lodahs para separar el elemento que tenemos
const items = words(nNumber, /[^-^+^*^/]+/g)
// operacion ternaria = (condición) ? (si se cumple) : (si no se cumple)
const valueItem = items.length > 0 ? items[items.length-1] : "0"
    // *debugger* para interrumpir y spervisar en una linea de código
    // lo que se ejecuta
    return (<main className="main-calculator"> 
                <div className="react-calculator">
                    <div>
                        <h1 className="calc-title">Calculadora</h1>
                        <Result value={valueItem}></Result>
                    </div>
                    <Numbers onClickNumber={number => {
                        setNnumber(`${nNumber}${number}`) // forma de concatenar variables ES6 `${variable1}espacaios o string ${variable2}`
                    }}/>
                    <div className="functions">
                        <Functions 
                        clearFunction={() => {
                            setNnumber("")
                        }}
                        deleteFunction={funct => { 
                            if (nNumber.length > 0) {
                                const newNumber = nNumber.substring(0, nNumber.length - 1)
                                setNnumber(newNumber)
                            }
                        }}
                        />
                    </div>
                    <MathOpetations 
                        onClikOperation={operation =>{ 
                            //console.log("operación",operation)
                            setNnumber(`${nNumber}${operation}`)
                        }}
                        onClickEqual={equal => {
                            //console.log("Botón de ",equal)
                            setNnumber(eval(nNumber).toString()) // la función eval() ejecuta cualquier operacion dentro de un string * es peligrosa *
                        }}
                        />
                </div>
            </main>)
}
// exportar
export default App