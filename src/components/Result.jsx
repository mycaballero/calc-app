// Siempre se importa
import React from "react"
import PropTypes from "prop-types" // npm install prop-types, y luego importas el paquete

// lo que se va a ejecutar
const Result = ({value}) => { // const Result = (props) => { se pudiera hacer así pero el como está hace mas cortoa el codigo
    // concepto de  object destructuring 
    //  const {value} = props // metemos todos los elementos del objeto listandolos en una constante e igualandolos al l nombre del parametro que lo trae
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

// para usar el proptype y validar propiedades
Result.propTypes = {
    value: PropTypes.string.isRequired
} // esta validación en producción no se ejecuta solo en desarrollo

// establecer valores por defecto
Result.defaultProps = {
    value: "0"
}


// se debe exportar
export default Result