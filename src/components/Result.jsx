// Siempre se importar
import React from "react"

// lo que se va a ejecutar
const Result = (props) => {
    // concepto de  object destructuring 
    const {value} = props
    console.log("Result",value)
    return (
        <div className="result-calc">
            <span>
                {
                    // props.value -> Esto está bien pero no es Destructuring es de la forma (objeto.propiedad)
                    value // al utilizar el Destructuring Ya no es necesario colocar *objeto.*, solo se deja la propiedad

                }
            </span>
        </div>
    )
}

// se debe exportar
export default Result