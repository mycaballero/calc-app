import React from "react"
import Button from "./Button"
import PropTypes from "prop-types"

const Functions = ({clearFunction, deleteFunction}) => (
    <section className="functions">
        <Button type="button-long-text" number="C" clickHandler={clearFunction}></Button>
        <Button number="&larr;" clickHandler={deleteFunction}></Button>
    </section>
)

Functions.propTypes = {
    clearFunction: PropTypes.func.isRequired,
    deleteFunction: PropTypes.func.isRequired
}
export default Functions