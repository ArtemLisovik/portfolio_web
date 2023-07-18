import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DocumentData, doc, getDoc} from "firebase/firestore"; 

import {db} from 'config/firebase'
import { Logo } from 'containers'
import {DesktopMenu} from 'containers/Menu/Menu'

import './Footer.scss'

export const Footer = () => {
  const [socials, setSocials] = useState<DocumentData>()


  useEffect(() => {
    const getLinks = async () => {
      const linksRef = doc(db, 'socials links', 'socials')
      const links = await getDoc(linksRef)
      setSocials(links.data())
    }
    getLinks()
  }, [])

  return (
    <footer className="footer">
    <div className="footer__container">
        <h3 className="footer__title title">Socials
            <span className="footer__wrapper-anim footer__anim"></span>
        </h3>
        <div className="info__socials-footer">
            <span className="footer__wrapper-anim footer__anim"></span>
            <a href="https://t.me/trendsetterl" className="social__link telegram" target="_blank">
                <img src="./assets/img/icons/telega.svg" alt="telegram" className="socials__icon"/>
            </a>
            <a href="https://www.instagram.com/trendsetter.z_/" className="social__link instagram" target="_blank">
                <img src="./assets/img/icons/instagram.svg" alt="telegram" className="socials__icon"/>
            </a>
            <a href="https://www.facebook.com/artem.lisovick" className="social__link facebook" target="_blank">
                <img src="./assets/img/icons/facebook.svg" alt="telegram" className="socials__icon"/>
            </a>
            <a href="https://www.linkedin.com/in/artem-lisovik-511072192/" className="social__link linkedin" target="_blank">
                <img src="./assets/img/icons/LinkedIn.svg" alt="telegram" className="socials__icon"/>
            </a>
        </div>
        <div className="footer__copyright">
            <p className="footer__copyright-text">Copyright © <script>document.write(new Date().getFullYear())</script>. All rights reserved by Lisovik Artem.</p>
            <span className="footer__wrapper-anim footer__anim"></span>
        </div>
    </div>
</footer>
  )
}