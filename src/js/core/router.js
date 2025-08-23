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
        if (event.target.matches('[data-link]')) {

            this._handleRemoveActive(event.target);
            this._handleActive(event.target);
            
            event.preventDefault();
            history.pushState('', '', event.target.href);
            this._renderRouter();
        } 
    })
    window.addEventListener('popstate', () => this._renderRouter());
    window.addEventListener('DOMContentLoaded', () => this._renderRouter());
}

Router.prototype._handleRemoveActive = function(tag) {
    const itemList = tag.closest('ul');
    const items = Array.from(itemList.querySelectorAll('.item'));
    items.forEach(item => {
        item.classList.remove("item--active");
    });
}

Router.prototype._handleActive = function(tag) {
    const currentItem = tag.closest('li');
    currentItem.classList.add('item--active');
}

export default Router;