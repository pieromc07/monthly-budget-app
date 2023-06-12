
import './Button.css'

export const Button = ({ text }) => {
    return (
        <button
            className='button--box'
        >
            {text}
        </button>
    )
}
