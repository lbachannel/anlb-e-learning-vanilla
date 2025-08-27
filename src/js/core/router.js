function Router(selector, routes = {}) {
    this.routes = Object.assign({}, routes);

    this.content = document.querySelector(selector);
    if (!this.content) {
        return console.error(`Router: no content found for selector '${selector}'`);
    }
}

Router.prototype._renderRouter = function() {
    const route = this.routes[location.pathname];
    if (route) {
        document.title = route.title;
        if (this.content) {
            this.content.innerHTML = '';
            this.content.appendChild(route.render());
        }
    } else {
        history.replaceState('', '', '/');
        this._renderRouter();
    }
}

Router.prototype.init = function() {
    window.addEventListener('click', event => {
        event.preventDefault();
        
        if (event.target.closest('[data-link]')) {
            const itemLink = event.target.closest('[data-link]');
            
            this._handleRemoveActive(itemLink);
            this._handleActive(itemLink);
            
            history.pushState('', '', itemLink.href);
            this._renderRouter();
        } 
    })
    window.addEventListener('popstate', () => this._renderRouter());
    window.addEventListener('DOMContentLoaded', () => {
        this._renderRouter();
        const currentItem = document.querySelector('.sidebar__item--active');
        this._updateActiveLine(currentItem, true);
    });
}

Router.prototype._handleRemoveActive = function(tag) {
    const itemList = tag.closest('ul');
    const items = Array.from(itemList.querySelectorAll('.sidebar__item'));
    items.forEach(item => {
        item.classList.remove("sidebar__item--active");
    });
}

Router.prototype._updateActiveLine = function(currentItem, refreshPage = false) {
    const activeItem = currentItem;
    const sidebarList = activeItem.closest('ul');
    const activeLine = sidebarList.nextElementSibling;
    if (!activeLine) {
        return;
    }
    if (refreshPage) {
        activeLine.style.transition = 'none';
    }
    activeLine.style.height = `${activeItem.offsetHeight}px`;
    activeLine.style.transform = `translateY(${activeItem.offsetTop}px)`;

    if (refreshPage) {
        requestAnimationFrame(() => {
            activeLine.style.transition = `transform 0.25s ease, height 0.25s`;
        })
    }
}

Router.prototype._handleActive = function(tag) {
    const currentItem = tag.closest('li');
    currentItem.classList.add('sidebar__item--active');
    this._updateActiveLine(currentItem);
}

export default Router;