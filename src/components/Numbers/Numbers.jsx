import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button.jsx"

const numbers = [7,8,9,4,5,6,1,2,3,0]

//  aplicando DRY 
const renderButtons = onClickNumber => {
    // <Button number="1" clickHandler={onClickNumber}/>
    const renderButton = num => (
        <Button 
            key={num.toString()}
            number={num.toString()} 
            clickHandler={onClickNumber} 
        />
    )
    return numbers.map(renderButton)
}


const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)


Numbers.propTypes = { // Fail Fast *Es mejor hacer que nuestra aplicación falle rapidamente que ver los fallos en producción*
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
