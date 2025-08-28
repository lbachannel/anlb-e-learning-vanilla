const Footer = () => {
    const footer = document.createElement('footer');
    footer.id = 'footer';
    footer.className = 'footer';

    const div = document.createElement('div');
    div.className = 'footer__row';

    const p = document.createElement('p');
    p.className = 'footer__copyright';
    p.textContent = "© Copyright belongs to AnLB | Powered by AnLB";

    div.appendChild(p);

    footer.appendChild(div);
    return footer;
}

export default Footer;