import React from "react"
import propTypes from "prop-types"

const Button = ({type, number, clickNumber}) => (
    <button className={type} onClick={() => clickNumber(number)}>
        <samp>{number}</samp>
    </button>
)


Button.propTypes = { // Fail Fast *Es mejor hacer que nuestra aplicación falle rapidamente que ver los fallos en producción*
    type: propTypes.string,
    number: propTypes.string.isRequired,
    clickNumber: propTypes.func.isRequired
}
export default Button