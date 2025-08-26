const _initItem = () => {
    const item = document.createElement('li');
    item.className = 'header-settings__list-item';

    const span = document.createElement('span');
    span.id = 'mode';

    const label = document.createElement('label');
    label.className = 'themes';

    const input = document.createElement('input');
    input.id = 'themes-input';
    input.type = 'checkbox';
    input.className = 'themes-input';
    input.hidden = true;
    input.checked = localStorage.getItem('dark') === 'true' ? true : false;

    const slider = document.createElement('span');
    slider.className = 'themes-slider';

    label.append(input, slider);
    span.appendChild(label);
    item.appendChild(span);
    return item;
}

const DarkLightModeItem = () => {
    const item = _initItem();
    const html = document.querySelector('html');

    const _changeStatus = (input) => {
        input.checked = !input.checked;
        localStorage.setItem('dark', input.checked);
        html.classList.toggle('dark', input.checked);
    }
    
    const toggle = (event) => {
        if (event.target.previousElementSibling) {
            const input = event.target.previousElementSibling;
            _changeStatus(input);
        } else if (event.target.matches('span')) {
            const span = event.target;
            const input = span.querySelector('.themes-input');
            _changeStatus(input);
        }
    }
    const span = item.querySelector('#mode');
    span.addEventListener('click', toggle);
    return item;
}

export default DarkLightModeItem;