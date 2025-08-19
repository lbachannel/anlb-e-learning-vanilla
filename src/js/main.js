import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import home from './pages/home.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import Router from "./core/router.js";


const headerTag = document.querySelector('#header');
const footerTag = document.querySelector('#footer');

headerTag.appendChild(Header());
footerTag.appendChild(Footer());

// SPA
const router = new Router('#app', {
    '/': { title: 'Home', render: home },
    '/about': { title: 'About', render: about },
    '/contact': { title: 'Contact', render: contact }
});

router.init();

