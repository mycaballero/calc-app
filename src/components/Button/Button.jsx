import React from "react"
import PropTypes from "prop-types"

const Button = ({type, number, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(number)}>
        <samp>{number}</samp>
    </button>
)


Button.propTypes = { // Fail Fast *Es mejor hacer que nuestra aplicación falle rapidamente que ver los fallos en producción*
    type: PropTypes.string,
    number: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}
export default Button