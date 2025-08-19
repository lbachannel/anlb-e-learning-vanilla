const About = () => {
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.innerText = 'About page';

    const p = document.createElement('p');
    p.innerText = 'Welcome to about page';

    fragment.append(h1, p);
    return fragment;
}

export default About;