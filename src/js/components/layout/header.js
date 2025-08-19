const createNavLink = (path, text) => {
    const a = document.createElement('a');
    a.href = path;
    a.dataset.link = '';
    a.innerText = text;
    return a;
}

const Header = () => {
    const container = document.createElement('div');
    container.className = 'container';

    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const nav = document.createElement('nav');
    nav.className = 'navbar';

    nav.appendChild(createNavLink('/', 'Home'));
    nav.appendChild(createNavLink('/about', 'About'));
    nav.appendChild(createNavLink('/contact', 'Contact'));
    topBar.appendChild(nav);
    container.appendChild(topBar);

    return container;
}

export default Header;