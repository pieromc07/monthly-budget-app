import image from '../../assets/login-image.svg'
import { Input } from '../../components'
import { Button } from '../../components/button/Button';
import './Login.css';

export const Login = () => {
    return (
        <div className='login__container'>
            <div className='container--left'>
                <h1 className='container--left-title'>
                    Calcular mejor, gastar mejor ...
                </h1>
                <img
                    src={image}
                    alt='Login'
                    className='container--left-image'
                />
            </div>
            <div className='container--right'>

                <form className='container--right-form'>

                    <h1 className='right__form--title'>
                        <span className='right__form--title-light'>Monthly</span>

                        <span className='right__form--title-green'>Budget</span>
                    </h1>

                    <Input
                        name='username'
                        type='text'
                        placeholder={'Nombre de usuario'}
                    />

                    <Input
                        name='password'
                        type='password'
                        placeholder={'Contraseña'}
                    />

                    <div className='right__form--button'>
                        <Button
                            text='Iniciar Monthly Budget'
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}
