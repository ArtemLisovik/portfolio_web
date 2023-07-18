import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './H2.scss'
import { useEffect } from 'react'

type H2Props = {
    children: React.ReactNode
}

export const H2 = ({children}: H2Props) => {

    useEffect(() => {
        const portfolioItems = document.querySelectorAll('.object__wrapper-anim');

       const elementScrollAnimation = (element:any, cssClassModification: any) => {
            document.addEventListener('scroll', (event) => {
                event.preventDefault();
                const distance = element.getBoundingClientRect();
                if (distance.top + (window.innerHeight / 8) < window.innerHeight && distance.bottom - (window.innerHeight / 8) > 0) {
                    element.classList.add(cssClassModification);
                }
            })
        }

    portfolioItems.forEach(item => {
        elementScrollAnimation(item, '_active');
    })
    }, [])

    return (
        <div className="about-me__title-wrapper title-wrapper">
            <h3 className="about-me__title title">{children}
                <span className="object__wrapper-anim"></span>
            </h3>
        </div>
    )
}

