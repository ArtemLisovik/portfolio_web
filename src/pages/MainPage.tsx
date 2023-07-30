import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import './MainPage.scss'
import { Portfolio } from "containers/Portfolio"
import { About, ContactUs, Footer, Header, Promo, Services, Terms } from "containers"
import { Button } from "ui"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"

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
                    <Link
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={0}
                        className="button__main">
                        Расчитать стоимость
                    </Link>
                    {/* <Button>Расчитать стоимость</Button> */}
                </div>

                <Promo />
                <Portfolio />
                <About/>
                <Services/>
                {/* <Terms/> */}
                <ContactUs/>

            </main>

            <Footer/>
        </>
    )
}
