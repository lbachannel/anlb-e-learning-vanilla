import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import SideBar from "./sidebar";

const RenderLayout = () => {
    const div = document.createElement('div');
    div.className = 'wrapper';

    const section = document.createElement('section');
    section.className = 'section';
    section.append(SideBar(), Content());

    div.append(Header(), section, Footer());
    return div;
}

export default RenderLayout;