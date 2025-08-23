const Contact = () => {
    const fragment = document.createDocumentFragment();
    const h1 = document.createElement('h1');
    h1.innerText = 'Contact page';

    const p = document.createElement('p');
    p.innerText = 'Welcome to contact page';

    fragment.append(h1, p);
    return fragment;
}

export default Contact;