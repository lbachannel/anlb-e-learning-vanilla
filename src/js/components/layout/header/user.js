const UserItem = (text = '') => {
    const item = document.createElement('li');
    item.className = 'header-settings__list-item';

    const span = document.createElement('span');
    span.className = 'username';
    span.innerText = text;
    item.append(span);
    return item;
}

export default UserItem;