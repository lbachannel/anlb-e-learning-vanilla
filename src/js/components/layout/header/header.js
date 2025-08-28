import LogoItem from "./logo";
import Menu from "./menu";

const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    // logo + menu
    const headerLogo = LogoItem();
    const headerMenu = Menu();

    header.append(headerLogo, headerMenu);

    return header;
}

export default Header;