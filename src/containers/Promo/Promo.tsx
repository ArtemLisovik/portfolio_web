import { Button } from 'ui/Button/Button'
import './Promo.scss'
import { Link } from 'react-scroll'



export const Promo = () => {

    return (
        <section className="info">
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
                        {/* <div className="info__subtitle-button">Заказать</div> */}
                        <Link
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={0}
                            className="button__main">
                            Заказать сайт
                        </Link>
                    </div>
                    <a href="" className="info__scroll-link" data-section=".portfolio">
                        <span className="info__mouse">
                            <span className="info__mouse-scroll"></span>
                        </span>
                        <span className="info__mouse-text">Scroll</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
