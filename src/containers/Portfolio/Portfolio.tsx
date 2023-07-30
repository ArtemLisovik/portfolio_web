import './Portfolio.scss'
import { PortfolioItem } from './components/PortfolioItem'

import portfolio1 from 'assets/portfolio/Colosseum.webp'
import portfolio2 from 'assets/portfolio/Modvado_Photostudio.webp'
import portfolio3 from 'assets/portfolio/free-drive.webp'
import portfolio4 from 'assets/portfolio/spectre.webp'
import portfolio5 from 'assets/portfolio/taskify.jpg'
import portfolio6 from 'assets/portfolio/tzp.webp'
import portfolio7 from 'assets/portfolio/saudi_crypto.webp'
import portfolio8 from 'assets/portfolio/eco.webp'
import portfolio9 from 'assets/portfolio/depro.webp'
import portfolio10 from 'assets/portfolio/export-navigator.webp'

import { H2 } from 'ui'


export const Portfolio = () => {
    return (
        <section className="portfolio" id='portfolio'>
            <div className="portfolio__container">
                <H2>Наши проекты</H2>
                <div className="portfolio__examples">

                <PortfolioItem
                        descr='De Pro'
                        title='Студия разработки приложений'
                        image={portfolio9}
                        link='https://depro.vercel.app/' />

                <PortfolioItem
                        descr='Saudi Crypto'
                        title='Крипто обменник'
                        image={portfolio7}
                        link='https://saudi-exchange-v2.vercel.app/en' />

                <PortfolioItem
                        descr='ECO'
                        title='Информационный портал проекта ECO'
                        image={portfolio8}
                        link='https://eco-tau.vercel.app/' />

                <PortfolioItem
                        descr='Export Navigator'
                        title='Консалтинговое агенство'
                        image={portfolio10}
                        link='https://export-navigator.vercel.app/' />

                    <PortfolioItem
                        descr='Colosseum'
                        title='Косметологическая клиника'
                        image={portfolio1}
                        link='https://colosseumsalon.github.io/Kryvoirog/' />

                    <PortfolioItem
                        descr='Modvado'
                        title='Фотостудия'
                        image={portfolio2}
                        link='https://modvado.github.io/Photostudio/' />

                    <PortfolioItem
                        descr='Free-drive'
                        title='Авто аренда'
                        image={portfolio3}
                        link='https://free-drive.github.io/rent-car/'/>

                    <PortfolioItem
                        descr='Spectre'
                        title='Создание и развитие продукта'
                        image={portfolio4}
                        link='https://spectredesignstudio.github.io/Spectre/' />

                    <PortfolioItem
                        descr='Taskify'
                        title='Менеджер задач'
                        image={portfolio5}
                        link='https://taskify-wheat.vercel.app/'/>

                    <PortfolioItem
                        descr='Tanya Zaricka'
                        title='Портфолио фотографа'
                        image={portfolio6}
                        link='https://tanyazaricka.github.io/portfolio/index.html' />


                    {/* <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/taskify.jpg" alt="example" className="element__photo"/>
                                <a href="https://taskify-wheat.vercel.app/auth" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Task manager</p>
                                        <p className="element__title">Taskify</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/Modvado_Photostudio.webp" alt="example" className="element__photo"/>
                                <a href="https://modvado.github.io/Photostudio/" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Photostudio</p>
                                        <p className="element__title">Modvado</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                       
                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/spectre.webp" alt="chito-burger" className="element__photo"/>
                                <a href="https://spectredesignstudio.github.io/Spectre/" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Design studio</p>
                                        <p className="element__title">Spectre</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/project_chito-burger.webp" alt="chito-burger" className="element__photo"/>
                                <a href="https://chitoburger.github.io" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Restaurant</p>
                                        <p className="element__title">Chito burger</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/free-drive.webp" alt="example" className="element__photo"/>
                                <a href="https://free-drive.github.io/rent-car/" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Car rental company</p>
                                        <p className="element__title">Free Drive</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/Colosseum.webp" alt="example" className="element__photo"/>
                                <a href="https://colosseumsalon.github.io/Kryvoirog/" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Salon of surgical cosmetology</p>
                                        <p className="element__title">Colosseum</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="portfolio__element element">
                            <p className="img__animation-wrapper"></p>
                            <div className="element__wrapper">
                                <img src="assets/img/tzp.webp" alt="example" className="element__photo"/>
                                <a href="https://tanyazaricka.github.io/portfolio/index.html" className="element__hover" target="_blank">
                                    <div className="element__hover-inner">
                                        <p className="element__descr">Photographer's Portfolio</p>
                                        <p className="element__title">Tanya Zaricka</p>
                                    </div>
                                </a>
                            </div>
                        </div> */}

                </div>
            </div>
        </section>
    )
}
