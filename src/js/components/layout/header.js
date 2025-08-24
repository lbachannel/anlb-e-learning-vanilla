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

const _createSettingItem = (options = {}) => {
    const opts = Object.assign({
        icon: '',
        text: '',
        customize: false
    }, options);

    const item = document.createElement('li');
    item.className = 'header-settings__list-item';

    if (opts.icon) {
        const img = document.createElement('img');
        img.className = 'header-settings__list-item-icon'
        img.src = opts.icon;

        const span = document.createElement('span');
        span.append(img);
        item.appendChild(span);
    }

    if (opts.text) {
        const span = document.createElement('span');
        span.innerText = opts.text;
        item.appendChild(span);
    }

    if (opts.customize) {

        const span = document.createElement('span');

        const label = document.createElement('label');
        label.className = 'themes';

        const input = document.createElement('input');
        input.id = 'themes-input';
        input.type = 'checkbox';
        input.className = 'themes-input';
        input.hidden = true;
        input.checked = false;

        const slider = document.createElement('span');
        slider.className = 'themes-slider';

        label.append(input, slider);
        span.appendChild(label);
        item.appendChild(span);

        span.onclick = (event) => {
            console.log(event.target)
            if (event.target.previousElementSibling) {
                const input = event.target.previousElementSibling;
                input.checked = !input.checked;
            } else if (event.target.matches('span')) {
                const span = event.target;
                const input = span.querySelector('.themes-input');
                input.checked = !input.checked;
            }
        }
    }

    return item;
}

const _loadSettings = () => {
    const div = document.createElement('div');
    div.className = 'header-settings';
    
    const list = document.createElement('ul');
    list.className = 'header-settings__list';
    // fullscreen, lightmode, user-info
    const fullscreen = _createSettingItem({ icon: 'fullscreen.svg' });
    const lightmode = _createSettingItem({ customize: true });
    const userInfo = _createSettingItem({ text: `Hi, Tommy` });

    list.append(fullscreen, lightmode, userInfo);
    div.appendChild(list);
    return div;
}

const _loadHeaderMenu = () => {
    const div = document.createElement('div');
    div.className = 'header__menu';

    // search
    const search = _loadSearch();
    // settings
    const settings = _loadSettings();

    div.append(search, settings);
    return div;
}

const Header = () => {
    const header = document.createElement('header');
    header.className = 'header';

    // logo + menu
    const headerLogo = _loadLogo();
    const headerMenu = _loadHeaderMenu();

    header.append(headerLogo, headerMenu);

    return header;
}

export default Header;