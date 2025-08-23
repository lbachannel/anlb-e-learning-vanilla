const _createItem = (itemLink, cssClass = '') => {
    const item = document.createElement('li');

    item.className = `item ${cssClass}`;
    item.append(itemLink);

    return item;
}


const _createItemLink = (path, text) => {
    const a = document.createElement('a');
    a.href = path;
    a.className = 'item-link';
    a.dataset.link = '';
    a.innerText = text;
    return a;
}

const SideBar = () => {
    const container = document.createElement('div');
    container.className = 'sidebar';

    const itemList = document.createElement('ul');
    itemList.className = 'item-list';

    itemList.append(_createItem(_createItemLink('/', 'Home'), 'item--active'));
    itemList.append(_createItem(_createItemLink('/about', 'About')));
    itemList.append(_createItem(_createItemLink('/contact', 'Contact'))); 

    container.appendChild(itemList);

    return container;
}

export default SideBar;