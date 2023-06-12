import { PropTypes } from 'prop-types'
import './Input.css'
export const Input = ({ name, type, placeholder }) => {

    const handleFocus = ({target}) => {
        let label = target.previousSibling
        label.classList.add('input--label-focus')
       console.log(label)
    }

    const handleBlur = ({target}) => {
        let label = target.previousSibling
        label.classList.remove('input--label-focus')
    }

    return (
        <div className='container__input'>
            <label className='input--label'>{placeholder}</label>
            <input
                className='input--box'
                name={name}
                type={type}
                autoComplete='off'
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}
