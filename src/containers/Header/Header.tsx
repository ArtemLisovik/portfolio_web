import { Menu } from 'containers'


import './Header.scss'
import { useEffect, useState } from 'react'

export const Header = () => {

    const [stickyHeaderActive, setStickyHeaderActive] = useState<Boolean>()

    const getWindowScroll = () => {
        if (window.pageYOffset > window.innerHeight - 200) {
            setStickyHeaderActive(true)
        } else {
            setStickyHeaderActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', getWindowScroll);

        return () => {
            window.removeEventListener('scroll', getWindowScroll);
        };
    }, []);

    return (
        <>
        <header className='header'>
            <div className="header__container">
                <Menu />
            </div>
        </header>

        <div className={`header sticky ${stickyHeaderActive ? 'active' : ''}`}>
            <div className="header__container">
                <Menu />
            </div>
        </div>
        </>
        


    )
}


// const HeaderStatic = () => {
//     return (
//         <header className='header'>
//             <div className="header__container">
//                 <Menu />
//             </div>
//         </header >
//     )
// }

// const HeaderSticky = () => {
//     return (
//         <header className='header sticky'>
//             <div className="header__container">
//                 <Menu />
//             </div>
//         </header>
//     )
// }