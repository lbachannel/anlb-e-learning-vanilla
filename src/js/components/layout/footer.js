const Footer = () => {
    const div = document.createElement('div');
    div.className = 'footer__row';

    const p = document.createElement('p');
    p.className = 'footer__copyright';
    p.textContent = "© Copyright belongs to AnLB | Powered by AnLB";

    div.appendChild(p);
    return div;
}

export default Footer;