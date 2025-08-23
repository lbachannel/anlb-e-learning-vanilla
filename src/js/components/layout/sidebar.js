const _createItem = (itemLink) => {
    const item = document.createElement('li');

    item.className = 'item';
    item.append(itemLink);

    return item;
}


const _createItemLink = (path, text) => {
    const a = document.createElement('a');
    a.href = path;
    a.dataset.link = '';
    a.innerText = text;
    return a;
}

const SideBar = () => {
    const container = document.createElement('div');
    container.className = 'sidebar';

    const itemList = document.createElement('ul');
    itemList.className = 'item-list';

    itemList.append(_createItem(_createItemLink('/', 'Home')));
    itemList.append(_createItem(_createItemLink('/about', 'About')));
    itemList.append(_createItem(_createItemLink('/contact', 'Contact'))); 

    container.appendChild(itemList);

    return container;
}

export default SideBar;