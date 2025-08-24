const _loadLogo = () => {
    const div = document.createElement('div');
    div.className = 'logo';

    const logo = document.createElement('img');
    logo.src = 'logo.svg';
    logo.className = 'logo__icon';

    const text = document.createElement('p');
    text.className = 'logo__text';
    text.innerText = 'Learning English';

    div.append(logo, text);
    return div;
}

const _clearInput = (input, clearBtn) => {
    input.value = '';
    clearBtn.style.display = 'none';
    input.focus();
}

const _loadSearch = () => {
    const div = document.createElement('div');
    div.className = 'header__search';

    const form = document.createElement('form');
    form.className = 'header__form';
    const icon = document.createElement('img');
    icon.src = 'search.svg';
    icon.className = 'header__input-icon'
    const input = document.createElement('input');
    input.placeholder = 'Search here...';
    input.className = 'header__input';
    input.name = '';

    const clearBtn = document.createElement('span');
    clearBtn.className = 'header__input-clear-btn';
    clearBtn.innerText = '✖';
    clearBtn.style.display = 'none';

    form.append(icon, input, clearBtn);
    div.append(form);

    input.oninput = (event) => {
        if (event.target.value) {
            clearBtn.style.display = 'inline';
        } else {
            clearBtn.style.display = 'none';
        }
    }

    clearBtn.onclick = () => {
        _clearInput(input, clearBtn);
    }

    return div;
}

const _loadHeaderMenu = () => {
    const div = document.createElement('div');
    div.className = 'header__menu';

    // search
    const search = _loadSearch();
    // settings


    div.append(search);
    return div;
}

const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    // logo + nav
    const headerLogo = _loadLogo();
    const headerMenu = _loadHeaderMenu();

    header.append(headerLogo, headerMenu);

    return header;
}

export default Header;