const _loadLogo = () => {
    const div = document.createElement('div');
    div.className = 'logo';

    const logo = document.createElement('img');
    logo.src = 'logo.svg';
    logo.className = 'logo__icon';

    const text = document.createElement('p');
    text.className = 'logo__text';
    text.innerText = 'Learning English';

    div.append(logo, text);
    return div;
}

const _loadNavBar = () => {
    const div = document.createElement('div');
    div.className = 'navbar';

    // search

    // settings
    return div;
}

const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    // logo + nav
    const headerLogo = _loadLogo();
    const headerNav = _loadNavBar();

    header.append(headerLogo, headerNav);

    return header;
}

export default Header;