import { Link } from 'react-scroll'
import './Logo.scss'

export const Logo = () => {
    return (
        <Link
            className="logo"
            to="promo"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}>
            <p className="logo__text">AL<span>studio</span>.</p>
        </Link>
    )
}
