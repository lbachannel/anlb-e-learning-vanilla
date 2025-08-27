const UserItem = (text = '') => {
    const item = document.createElement('li');
    item.className = 'header-settings__list-item dropdown';

    const span = document.createElement('span');
    span.className = 'username';
    span.innerText = text;

    const _initDropdownMenu = () => {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.className = 'dropdown__menu dropdown__menu--animated';

        const dropdownItem1 = document.createElement('li');
        dropdownItem1.className = 'dropdown__item dropdown__item-1';
        dropdownItem1.innerText = 'Change password';
        const iconChangePass = document.createElement('img');
        iconChangePass.className = 'dropdown__item-icon';
        iconChangePass.src = 'change-pass.svg';
        dropdownItem1.append(iconChangePass);

        const dropdownItem2 = document.createElement('li');
        dropdownItem2.className = 'dropdown__item dropdown__item-2';
        dropdownItem2.innerText = 'Logout';
        const iconLogout = document.createElement('img');
        iconLogout.className = 'dropdown__item-icon';
        iconLogout.src = 'logout.svg';
        dropdownItem2.append(iconLogout);
        
        dropdownMenu.append(dropdownItem1, dropdownItem2);
        return dropdownMenu;
    }

    const dropdownMenu = _initDropdownMenu();

    const handleClick = (event) => {
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.opacity = 1;
        event.stopPropagation();
    }

    item.addEventListener('click', handleClick);

    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && !item.contains(event.target)) {
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = 0;
        }
    });

    item.append(span, dropdownMenu);
    return item;
}

export default UserItem;