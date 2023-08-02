import './About.scss'

import about from 'assets/img/about.webp'

export const About = () => {
    return (
        <section className="about-me" id='about'>
            <div className="about-me__container">
                <div className="about-me__title-wrapper title-wrapper">
                    <h3 className="about-me__title title">О нас
                        <span className="object__wrapper-anim"></span>
                    </h3>
                </div>
                <div className="about-me__wrapper">
                    <div className="about-me__photo">
                        <div className="photo__wrapper">
                            <p className="img__animation-wrapper"></p>
                            <div className="photo__inner">
                                <img src={about} alt="avatar" className="avatar" />
                            </div>
                            <span className="dotted_img"></span>
                        </div>
                    </div>
                    <div className="about-me__descr descr">
                        <h4 className="descr__title">Реализовываем ваши идеи!
                            <span className="object__wrapper-anim"></span>
                        </h4>
                        <div className="descr__text">
                            <p>Мы - команда профессионалов в области веб-разработки и фанаты своего дела! <br/>Мы усердно работаем для вас уже более 2 лет. За это время нами было сделано уже больше 50-ти успешных, сложных и интересных коммерческих проектов. Часть из этих проектов мы продолжаем вести и до сих пор и всегда на связи с нашими клиентами! <br/>
                            Отвественность и качество - наши основные акценты! Клиенты всегда знают, что мы сделаем все возможное, что бы все оговоренные условия с нашей стороны были соблюдены. <br/> 
                            Репутация - самая главная ценность нашей команды!
                                <span className="object__wrapper-anim"></span>
                            </p>
                            <p>Наш дивиз - "Делай отлично или не делай вообще"
                                <span className="object__wrapper-anim"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
