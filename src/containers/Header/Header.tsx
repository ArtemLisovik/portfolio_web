import { Link } from 'react-router-dom'
import { Menu } from 'containers'
import { MySelect } from 'ui/Select/Select'


import './Header.scss'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Menu />
            </div>
        </header>
    )
}