import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.scss'

import { menuConfig } from './config/menuConfig'
import { Link } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import { textAnimation, titleAnimation } from 'config/animation'

export type menuType = 'ua' | 'ru' | 'en'

export const Menu = () => {

    const [desktopMenu, setDesktopMenu] = useState(true)

    const getWindowSize = () => {
        if (window.innerWidth < 854) {
            setDesktopMenu(false)
        } else {
            setDesktopMenu(true)
        }
    }

    useEffect(() => {
        getWindowSize()
    }, []);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        };
    }, [desktopMenu]);

    const view = desktopMenu ? <DesktopMenu /> : <BurgerMenu />

    return (
        <>
            {view}
        </>
    )
}


export const DesktopMenu = () => {


    const lang = document.cookie.split('=')[1] as menuType
    const menuList = Object.entries(menuConfig[lang])
    const view = menuList.map((menuItem, index) => {
        return <li
            style={{ animation: `menuReveal 0.5s ease ${index / 15}s`, animationFillMode: `forwards` }}
            key={menuItem[0]}
            className="menu__item">
            <NavLink to={menuItem[1] as string} className={({ isActive }: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>{menuItem[0]}</NavLink>
        </li>
    })


    return (
        <nav className="header__nav">
            <ul className="header__menu-list1 menu">

                <li className="menu__item">
                    <Link
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={0}
                        className="menu__link link">
                        Наши проекты
                    </Link>
                </li>

                <li className="menu__item">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={0}
                        className="menu__link link">
                        О нас
                    </Link>
                </li>
            </ul>
            <ul className="header__menu-list2 menu">
                <li className="menu__item">
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={0}
                        className="menu__link link">
                        Наши услуги
                    </Link>
                </li>


                <li className="menu__item">
                    <Link
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={0}
                        className="menu__link link">
                        Рассчитать стоимость
                    </Link>
                </li>

                <li className="menu__item">
                    <Link
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={4500}
                        duration={0}
                        className="menu__link link">
                        Партнерство и сотрудничество
                    </Link>
                </li>

            </ul>
        </nav>
    )
}


const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if (menuActive) {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
        } else {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
        }
    }, [menuActive])

    const burgerMenuHandler = () => {
        setMenuActive(state => !state)
    }

    return (
        <div className="burger-menu">

            <div className="burger-menu__button">
                <svg className={`ham ham6 ${menuActive ? 'active' : ''}`} viewBox="0 0 100 100" width="60" onClick={burgerMenuHandler}
                >
                    <path
                        className="line top"
                        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                    <path
                        className="line middle"
                        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                    <path
                        className="line bottom"
                        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
                </svg>
            </div>

            <AnimatePresence>
                {menuActive && <motion.nav 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                className='burger-menu__wrapper'>

                    <motion.div
                        className="burger-menu__link-wrapper"
                        initial='hidden'
                        animate='visible'
                        viewport={{ amount: 0.6, once: true }}
                        variants={titleAnimation}
                        custom={0}>
                        <Link
                            onClick={burgerMenuHandler}
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="burger-menu__link">
                            Наши проекты
                        </Link>
                    </motion.div>


                    <motion.div
                        className="burger-menu__link-wrapper"
                        initial='hidden'
                        animate='visible'
                        viewport={{ amount: 0.6, once: true }}
                        variants={titleAnimation}
                        custom={0.05}>
                        <Link
                            onClick={burgerMenuHandler}
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="burger-menu__link">
                            О нас
                        </Link>
                    </motion.div>

                    <motion.div
                        className="burger-menu__link-wrapper"
                        initial='hidden'
                        animate='visible'
                        viewport={{ amount: 0.6, once: true }}
                        variants={titleAnimation}
                        custom={0.1}>
                        <Link
                            onClick={burgerMenuHandler}
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="burger-menu__link">
                            Наши услуги
                        </Link>
                    </motion.div>

                    <motion.div
                        className="burger-menu__link-wrapper"
                        initial='hidden'
                        animate='visible'
                        viewport={{ amount: 0.6, once: true }}
                        variants={titleAnimation}
                        custom={0.15}>
                        <Link
                            onClick={burgerMenuHandler}
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="burger-menu__link">
                            Заказать
                        </Link>
                    </motion.div>

                    <motion.div
                        className="burger-menu__link-wrapper"
                        initial='hidden'
                        animate='visible'
                        viewport={{ amount: 0.6, once: true }}
                        variants={titleAnimation}
                        custom={0.2}>
                        <Link
                            onClick={burgerMenuHandler}
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={9000}
                            duration={0}
                            className="burger-menu__link">
                            Сотрудничество
                        </Link>
                    </motion.div>

                </motion.nav>}
            </AnimatePresence>

        </div>

    )
}