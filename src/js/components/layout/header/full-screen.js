const _initItem = (icon) => {
    const item = document.createElement('li');
    item.className = 'header__settings-list-item';
    const img = document.createElement('img');
    img.src = icon;
    img.className = 'header__settings-list-item-icon';
    const span = document.createElement('span');
    span.append(img);
    item.append(span);
    return item;
}

const FullScreenItem = (icon) => {
    if (!icon) {
        return console.error(`Error: You must provide icon`);
    }
    const toggle = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
    const item = _initItem(icon);
    const span = item.querySelector('span');
    span.addEventListener('click', toggle);
    return item;
}

export default FullScreenItem;