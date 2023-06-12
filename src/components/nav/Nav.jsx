
import logo from '../../assets/Budget.svg';
import user from '../../assets/user.svg';
import { Button } from '../button/Button';
import './Nav.css';

export const Nav = () => {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Budget Logo" className='nav__logo' />
                <div className="nav__title">
                    <span className="nav__title--small">
                        Expense Tracker
                    </span>
                    <h1 className="nav__title--large">
                        Monthly <span>Budget</span>
                    </h1>
                </div>
                <button className="nav__button">
                    <Button text='New Expense' />
                </button>
                <div className="nav__profile">
                    <img src={user} alt="Profile" className='nav__profile--img' />
                    <span className="nav__profile--name">Welcome John Doe !</span>
                </div>
            </nav>
        </header>
    )
}
