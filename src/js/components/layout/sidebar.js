const _createItem = (itemLink, cssClass = '') => {
    const item = document.createElement('li');

    item.className = `sidebar__item ${cssClass}`;
    item.append(itemLink);

    return item;
}


const _createItemLink = (path, text, icon = '') => {
    const a = document.createElement('a');
    a.href = path;
    a.className = 'sidebar__item-link';
    a.dataset.link = '';

    if (icon) {
        const spanIcon = document.createElement('span');
        spanIcon.append(icon);
        a.append(spanIcon);
    }

    const spanText = document.createElement('span');

    spanText.innerText = text;

    a.append(spanText);

    return a;
}

const _loadIcon = (path) => {
    const icon = document.createElement('img');
    icon.className = 'sidebar__item-link-icon';
    icon.src = path;
    return icon;
}

const SideBar = () => {
    const container = document.createElement('div');
    container.className = 'sidebar';

    const itemList = document.createElement('ul');
    itemList.className = 'sidebar__list';

    // item-link
    const itemLinkHome = _createItemLink('/', 'Home', _loadIcon('home.svg'));
    const itemLinkAbout = _createItemLink('/about', 'About', _loadIcon('book.svg'));
    const itemLinkContact = _createItemLink('/contact', 'Contact', _loadIcon('contact.svg'));

    // item
    const itemHome = location.pathname === '/' ? _createItem(itemLinkHome, 'sidebar__item--active') : _createItem(itemLinkHome);
    const itemAbout = location.pathname === '/about' ? _createItem(itemLinkAbout, 'sidebar__item--active') : _createItem(itemLinkAbout);
    const itemContact = location.pathname === '/contact' ? _createItem(itemLinkContact, 'sidebar__item--active') : _createItem(itemLinkContact);
    

    itemList.append(itemHome, itemAbout, itemContact);

    container.appendChild(itemList);

    return container;
}

export default SideBar;