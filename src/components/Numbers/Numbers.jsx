import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button.jsx"


const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        <Button number="1" clickHandler={onClickNumber}/>
        <Button number="2" clickHandler={onClickNumber}/>
        <Button number="3" clickHandler={onClickNumber}/>
        <Button number="4" clickHandler={onClickNumber}/>
        <Button number="5" clickHandler={onClickNumber}/>
        <Button number="6" clickHandler={onClickNumber}/>
        <Button number="7" clickHandler={onClickNumber}/>
        <Button number="8" clickHandler={onClickNumber}/>
        <Button number="9" clickHandler={onClickNumber}/>
        <Button number="0" clickHandler={onClickNumber}/>
    </section>
)


Numbers.propTypes = { // Fail Fast *Es mejor hacer que nuestra aplicación falle rapidamente que ver los fallos en producción*
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
