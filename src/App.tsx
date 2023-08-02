import { BrowserRouter } from 'react-router-dom';
import { Routings } from './routes/Routings';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import './styles/reset.scss'
import './styles/base.scss'
import './styles/variables.scss'
import './styles/animations.scss'
import { ToastContainer } from 'react-toastify';



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ua', 'en', 'ru'],
    fallbackLng: "ua",
    detection: {
      order: ['cookie', 'localStorage', 'htmITag', 'path', 'subdomain'],
      caches: ['cookie']
    },
  })


function App() {

  return (
    <>
      <BrowserRouter>
        <Routings />
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default App;
