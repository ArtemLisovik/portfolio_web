import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Menu.scss'

import { menuConfig } from './config/menuConfig'
import { Link } from 'react-scroll'

export type menuType = 'ua' | 'ru' | 'en'

export const Menu = () => {

    const [desktopMenu, setDesktopMenu] = useState(true)

    const getWindowSize = () => {
        if (window.innerWidth < 700) {
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

    console.log(document.cookie)
    const lang = document.cookie.split('=')[1] as menuType
    const menuList = Object.entries(menuConfig[lang])
    const view = menuList.map((menuItem, index) => {
        return <li
            style={{ animation: `menuReveal 0.5s ease ${index / 15}s`, animationFillMode: `forwards` }}
            key={menuItem[0]}
            className="burger-menu__item">
            <NavLink to={menuItem[1] as string} className={({ isActive }: any) => isActive ? "menu__list-item active" : 'menu__list-item'}>{menuItem[0]}</NavLink>
        </li>
    })


    return (
        <nav className="header__nav">
            <ul className="header__menu-list1 menu">
                <li className="menu__item"><a href="" data-section=".info" className="menu__link link">Home</a></li>
                <li className="menu__item"><a href="" data-section=".portfolio" className="menu__link link">Portfolio</a></li>
                <li className="menu__item"><a href="" data-section=".about-me" className="menu__link link">About</a></li>
            </ul>
            <ul className="header__menu-list2 menu">
                <li className="menu__item"><a href="" data-section=".my-skills" className="menu__link link">My skills</a></li>
                <li className="menu__item"><a href="" data-section=".contact-form" className="menu__link link">Contact</a></li>
                <li className="menu__item"><a href="" data-section=".footer" className="menu__link link">Socials</a></li>
            </ul>
        </nav>
    )
}