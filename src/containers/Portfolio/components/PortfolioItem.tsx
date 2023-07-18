import { useEffect } from 'react';

import './PortfolioItem.scss'


type PortfolioItemType ={
    title: string,
    descr: string,
    image: string,
    link: string
}
export const PortfolioItem = ({title, descr, image, link}:PortfolioItemType) => {

    useEffect(() => {
        const portfolioItems = document.querySelectorAll('.img__animation-wrapper');

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
        elementScrollAnimation(item, '_anim');
    })
    }, [])


    return (
        <div className="portfolio__element element">
            <p className="img__animation-wrapper"></p>
            <div className="element__wrapper">
                <img src={image} alt="example" className="element__photo" />
                <a href={link} className="element__hover" target="_blank">
                    <div className="element__hover-inner">
                        <p className="element__title">{descr}</p>
                        <p className="element__descr">{title}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
