const LogoItem = () => {
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

export default LogoItem;