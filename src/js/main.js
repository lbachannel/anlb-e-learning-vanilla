import home from './pages/home.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
import Router from "./core/router.js";
import RenderLayout from "./components/layout/render.js";

const app = document.querySelector('#app');
app.appendChild(RenderLayout());
const html = document.querySelector('html');
html.classList.toggle('dark', localStorage.getItem('dark') === 'true' ? true : false);

// SPA
const router = new Router('#content', {
    '/': { title: 'Home', render: home },
    '/about': { title: 'About', render: about },
    '/contact': { title: 'Contact', render: contact }
});

router.init();
