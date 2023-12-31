import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { ContactInput } from './components/ContactInput/ContactInput'
import { yupResolver } from "@hookform/resolvers/yup"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { IData } from 'types/IData'
import { schema } from './helpers/schema'

import './ContactUs.scss'
import { ContactTextArea } from './components/ContactTextArea/ContactTextArea'
import { Paragraph } from 'ui'
import { sendMessageTelegram } from './helpers/telegram'



export const ContactUs = () => {

    const methods = useForm<IData>({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
    })

    const { handleSubmit, reset, formState: { errors } } = methods

    const onHandleSubmit: SubmitHandler<IData> = async (data) => {
        sendMessageTelegram(data)
        toast.success('Заявка отправлена', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        reset()
    }

    return (
        <section className="contact-form" id='contactUs'>
            <div className="contact-form__container">
                <div className="about-me__title-wrapper title-wrapper">
                    <h3 className="about-me__title title">Связаться с нами
                        <span className="object__wrapper-anim"></span>
                    </h3>
                </div>
                <Paragraph>
                    Заполните короткую форму и мы свяжемся с вами удобным для вас способом (по телефону или в мессенджере)
                </Paragraph>
                <div className="contact-form__inner">
                    <div className="contact-form__form">

                        <FormProvider {...methods}>
                            <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
                                <div className="form__wrapper">
                                    <ContactInput placeholder='Ваше имя' inputName='name' type='text' />
                                    <ContactInput placeholder='Ваш номер телефона' inputName='phone' type='number' />
                                </div>

                                <ContactTextArea 
                                placeholder='Опишите ваш запрос (приложите ссылку на пример желаемого сайта)'
                                inputName='message'/>

                                {/* <div className="form__message">
                                    <textarea placeholder="Приложите ссылку на пример желаемого сайта и опишите в кратце что бы вы хотели" name="message" className="input__text"></textarea>
                                    <div className="error__text"></div>
                                    <span className="object__wrapper-anim"></span>
                                </div> */}

                                <div className="form__button">
                                    <span className="object__wrapper-anim"></span>
                                    <button type="submit" className="descr__button">Отправить</button>
                                </div>
                            </form>
                        </FormProvider>

                    </div>
                    <div className="contact-form__info">
                        <div className="contacts__block email">
                            <p className="contacts__title">e-mail</p>
                            <p className="contacts__item">Artemlisovik@icloud.com</p>
                            <span className="object__wrapper-anim"></span>
                        </div>
                        <div className="contacts__block phone">
                            <p className="contacts__title">Телефон</p>
                            <a href="tel:+380930545387" className="contacts__item">+380 93 054 53 87</a>
                            <span className="object__wrapper-anim"></span>
                        </div>
                        <div className="contacts__block location">
                            <p className="contacts__title">Месторасположение</p>
                            <p className="contacts__item">Kiev, Ukraine</p>
                            <span className="object__wrapper-anim"></span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
