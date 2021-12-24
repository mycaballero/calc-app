import React from "react"
import Button from "./Button/Button.jsx"
import PropTypes from "prop-types"

const MathOpetations = ({onClikOperation, onClickEqual}) =>  (
    <section className="math-operations">
        <Button number="+" clickHandler={onClikOperation}/>
        <Button number="-" clickHandler={onClikOperation}/>
        <Button number="*" clickHandler={onClikOperation}/>
        <Button number="/" clickHandler={onClikOperation}/>
        <Button number="=" clickHandler={onClickEqual}/>
    </section>
)
MathOpetations.propTypes = {
    onClikOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}
export default MathOpetations