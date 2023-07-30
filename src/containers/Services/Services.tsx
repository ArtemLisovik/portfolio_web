import { H2, Paragraph } from 'ui'
import './Services.scss'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

export const Services = () => {
    return (
        <section className="services" id='services'>
            <div className="services__container">

                <div className="services__title-wrapper title-wrapper">
                    <H2>Услуги и цены</H2>
                </div>

                <div className="services__service-item service-item">
                    <motion.div
                        className="service-item__item"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.1}
                    >
                        <p className="service-item__title">Сайт лендинг</p>
                        <Paragraph animationOff>Одностраничный сайт. Отличный вариант для того, что бы презентовать свои услуги, товар или компанию</Paragraph>
                    <p className="service-item__price">Стоимость: от 10000 грн</p>
                
                    </motion.div>

                    <motion.div
                        className="service-item__item"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.3}>
                        <p className="service-item__title">Сайт визитка</p>
                        <Paragraph animationOff>Сайт, для более глубокой презентации вашей кампании, продукта или услуги. Как правило состоит из 5-6 страниц</Paragraph>
                        <p className="service-item__price">Стоимость: от 15000 грн</p>
                    </motion.div>

                    <motion.div
                        className="service-item__item"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.5}>
                        <p className="service-item__title">Многостраничный сайт</p>
                        <Paragraph animationOff>Чаще всего многостраничные сайты - это информационные ресурсы или новостные порталы</Paragraph>
                        <p className="service-item__price">Стоимость: от 20000 грн</p>
                    </motion.div>

                    <motion.div 
                    className="service-item__item"
                    initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.7}>
                        <p className="service-item__title">Корпоративный сайт</p>
                        <Paragraph animationOff>Сайт для корпоративного использования, модерирования и управления контентом. Например СRM и прочие корпоративные системы</Paragraph>
                        <p className="service-item__price">Стоимость: от 40000 грн</p>
                    </motion.div>

                    <motion.div 
                    className="service-item__item"
                    initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.7}>
                        <p className="service-item__title">Интернет-магазин</p>
                        <Paragraph animationOff>E-commerce проект, направленный на продажу множественных товаров или услуг</Paragraph>
                        <p className="service-item__price">Стоимость: от 50000 грн</p>
                    </motion.div>

                    <motion.div 
                    className="service-item__item"
                    initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.1, once: true }}
                        variants={textAnimation}
                        custom={0.7}>
                        <p className="service-item__title">Ексклюзивный проект</p>
                        <Paragraph animationOff>Индивидуальный проект, который не попадает ни в одну предыдущую категорию</Paragraph>
                        <p className="service-item__price">Стоимость: индивидуально</p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

