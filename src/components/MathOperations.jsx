import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const MathOpetations = ({onClikOperation, onClickEqual}) =>  (
    <section className="math-operations">
        <Button number="+" clickHandler={onClikOperation}></Button>
        <Button number="-" clickHandler={onClikOperation}></Button>
        <Button number="*" clickHandler={onClikOperation}></Button>
        <Button number="/" clickHandler={onClikOperation}></Button>
        <Button number="=" clickHandler={onClickEqual}></Button>
    </section>
)


MathOpetations.propTypes = {
    onClikOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}
export default MathOpetations