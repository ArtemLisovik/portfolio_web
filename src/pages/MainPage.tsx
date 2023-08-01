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


                <div className="socials">
                    <a href="https://t.me/Artem_lead" className="social__link telegram" target="_blank">
                        <svg width="27px" height="27px" fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            strokeLinejoin: 'round',
                            strokeMiterlimit: '1.41421'
                        }}>
                            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/trendsetter.z_/" className="social__link instagram" target="_blank">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px"><path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z" />
                        </svg>
                    </a>
                    {/* <a href="https://www.facebook.com/artem.lisovick" className="social__link facebook" target="_blank">
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>
                        </a> */}
                    {/* <a href="https://www.linkedin.com/in/artem-lisovik-511072192/" className="social__link linkedin" target="_blank">
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="40px" height="40px">    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
                        </a> */}


                </div>

                <div className={`main__button ${mainButtonActive ? 'active' : null}`}>
                    <Link
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={0}
                        className="button__main">
                        Рассчитать стоимость
                    </Link>
                    {/* <Button>Расчитать стоимость</Button> */}
                </div>

                <Promo />
                <Portfolio />
                <About />
                <Services />
                {/* <Terms/> */}
                <ContactUs />

            </main>

            <Footer />
        </>
    )
}
