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

// FullScreen
const fullscreen = document.querySelector('#fullscreen');
fullscreen.onclick = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Dark light mode
const span = document.querySelector('#mode');
span.onclick = (event) => {
    if (event.target.previousElementSibling) {
        const input = event.target.previousElementSibling;
        input.checked = !input.checked;
        localStorage.setItem('dark', input.checked);
        html.classList.toggle('dark', input.checked);
    } else if (event.target.matches('span')) {
        console.log("run else if ")
        const span = event.target;
        const input = span.querySelector('.themes-input');
        input.checked = !input.checked;
        localStorage.setItem('dark', input.checked);
        html.classList.toggle('dark', input.checked);
    }
}

router.init();
