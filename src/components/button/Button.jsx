import { PropTypes } from 'prop-types'
import './Button.css'

export const Button = ({ text }) => {
    return (
        <button className='button--box'>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}