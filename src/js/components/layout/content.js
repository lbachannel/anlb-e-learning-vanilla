const Content = () => {
    const div = document.createElement('div');
    div.className = 'content';
    div.innerHTML = 'This is content';
    div.style.background = 'green';
    return div;
}

export default Content;