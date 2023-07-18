import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import './MainPage.scss'
import { Portfolio } from "containers/Portfolio"
import { Header, Promo } from "containers"
import { Button } from "ui"
import { useEffect, useState } from "react"

export const MainPage = () => {
    const { t } = useTranslation()

    const [mainButtonActive, setMainButtonActive] = useState<Boolean>()



    const getWindowScroll = () => {
        console.log(window.innerHeight)
        console.log(window.pageYOffset)
        if (window.pageYOffset > window.innerHeight) {
            setMainButtonActive(true)
        } else {
            setMainButtonActive(false)
        }
    }

    useEffect(() => {
        getWindowScroll()
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', getWindowScroll);

        return () => {
            window.removeEventListener('scroll', getWindowScroll);
        };
    }, []);





    return (
        <>
            <Helmet>
                <title>Artem Lisovik - Web Developer</title>

            </Helmet>

            <Header />
            <main className="main">

                <div className={`main__button ${mainButtonActive ? 'active' : null}`}>
                    <Button>Расчитать стоимость</Button>
                </div>

                <Promo />

                <Portfolio />


                {/* <section className="about-me">
                <div className="about-me__container">
                    <div className="about-me__title-wrapper title-wrapper">
                        <h3 className="about-me__title title">About Me
                            <span className="object__wrapper-anim"></span>
                        </h3>
                    </div>
                    <div className="about-me__wrapper">
                        <div className="about-me__photo">
                            <div className="photo__wrapper">
                                <p className="img__animation-wrapper"></p>
                                <div className="photo__inner">
                                    <img src="./assets/img/avatar.webp" alt="avatar" className="avatar"/>
                                </div>
                                <span className="dotted_img"></span>
                            </div>
                        </div>
                        <div className="about-me__descr descr">
                            <h4 className="descr__title">Implementation of your ideas
                                <span className="object__wrapper-anim"></span>
                            </h4>
                            <div className="descr__text">
                                <p>Front end developer with over 2 year of experience designing and building responsive web
                                    sites and web application. Write easily
                                    maintainable code. Have great understanding of UX and user's psychology. Designer at heart. Notable
                                    achievments include boosting the conversion rate of an exsisting website by 80% with
                                    improved code and design.
                                    <span className="object__wrapper-anim"></span>
                                </p>
                                <p>Do perfectly or don’t do at all.
                                    <span className="object__wrapper-anim"></span>
                                </p>
                                <div className="button">
                                    <span className="object__wrapper-anim"></span>
                                    <a href="./assets/Artem_Lisovik_CV.pdf" target="_blank" className="descr__button">download my cv</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-skills">
                <div className="my-skills__container">
                    <div className="about-me__title-wrapper title-wrapper">
                        <h3 className="about-me__title title">My skills
                            <span className="object__wrapper-anim"></span>
                        </h3>
                    </div>
                    <div className="my-skills__counter counter">
                        <div className="counter__item">
                            <p className="counter__level" id="92"></p>
                            <p className="counter__name">html/css(scss, tailwind)</p>
                        </div>
                        <div className="counter__item" data-delay="1">
                            <p className="counter__level" id="90"></p>
                            <p className="counter__name">js/es5/es6+</p>
                        </div>
                        <div className="counter__item" data-delay="2">
                            <p className="counter__level" id="90"></p>
                            <p className="counter__name">React/redux</p>
                        </div>
                        <div className="counter__item" data-delay="3">
                            <p className="counter__level" id="92"></p>
                            <p className="counter__name">Wordpress/git/webpack</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form">
                <div className="contact-form__container">
                    <div className="about-me__title-wrapper title-wrapper">
                        <h3 className="about-me__title title">Get In Touch
                            <span className="object__wrapper-anim"></span>
                        </h3>
                    </div>
                    <div className="contact-form__inner">
                        <div className="contact-form__form">
                            <form className="form">
                                <div className="form__wrapper">
                                    <div className="form__wrapper-name">
                                        <span className="object__wrapper-anim"></span>
                                        <input placeholder="Name" type="text" name="name" className="input__name _require"/>
                                        <div className="error__text"></div>
                                    </div>
                                    <div className="form__wrapper-email">
                                        <input placeholder="E-mail" type="text" name="email" className="input__e-mail _require"/>
                                        <div className="error__text"></div>
                                        <span className="object__wrapper-anim"></span>
                                    </div>
                                </div>
                                <div className="form__message">
                                    <textarea placeholder="Write your message" name="message" className="input__text"></textarea>
                                    <div className="error__text"></div>
                                    <span className="object__wrapper-anim"></span>
                                </div>
                                
                                <div className="button">
                                    <span className="object__wrapper-anim"></span>
                                    <button type="submit" className="descr__button">Send message</button>
                                </div>
                            </form>
                        </div>
                        <div className="contact-form__info info">
                            <div className="contacts__block email">
                                <p className="contacts__title">email</p>
                                <p className="contacts__item">Artemlisovik@icloud.com</p>
                                <span className="object__wrapper-anim"></span>
                            </div>
                            <div className="contacts__block phone">
                                <p className="contacts__title">phone</p>
                                <a href="tel:+38073173357" className="contacts__item">+380 73 17 333 57</a>
                                <span className="object__wrapper-anim"></span>
                            </div>
                            <div className="contacts__block location">
                                <p className="contacts__title">location</p>
                                <p className="contacts__item">Kiev, Ukraine</p>
                                <span className="object__wrapper-anim"></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section> */}
            </main>
        </>
    )
}
