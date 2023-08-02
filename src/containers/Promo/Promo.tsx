import { Button } from 'ui/Button/Button'
import './Promo.scss'
import { Link } from 'react-scroll'



export const Promo = () => {

    return (
        <section className="info" id='promo'>
            <div className="info__logo">
                <div className="info__container">


                    <h1 className="info__title">
                        <span className="info__title-text">Artem Lisovik</span>
                        <span className="info__title-wrapper"></span>
                    </h1>
                    <h2 className="info__subtitle">
                        <span className="info__subtitle-text">Студия веб-разработки</span>
                        <span className="info__subtitle-wrapper"></span>
                    </h2>
                    <div className="info__subtitle-price">
                        <span className="info__subtitle-price-text">Создание сайтов любой сложности</span>
                        <span className="info__subtitle-wrapper"></span>
                        {/* <Link
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="button__main">
                            Заказать сайт
                        </Link> */}
                    </div>
                    
                    <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={0}
                    className="info__scroll-link">
                      <span className="info__mouse">
                            <span className="info__mouse-scroll"></span>
                        </span>
                        <span className="info__mouse-text">Scroll</span>
                </Link>
                </div>
            </div>
        </section>
    )
}
