function Router(selector, routes = {}) {
    this.routes = Object.assign({}, routes);

    this.app = document.querySelector(selector);
    if (!this.app) {
        return console.error(`Router: no app found for selector '${selector}'`);
    }
}

/**
 * Renders the current route based on the browser's `location.pathname`.
 * 
 * - Finds the route definition from `this.routes`.
 * - Updates the document title.
 * - Clears and re-renders the content inside the application root element (`this.app`).
 * - If the route does not exist, redirects to `/` and re-renders.
 *
 * @private
 * @method
 * @memberof Router
 * @returns {void}
 */
Router.prototype._renderRouter = function() {
    const route = this.routes[location.pathname];
    if (route) {
        document.title = route.title;
        if (this.app) {
            this.app.innerHTML = '';
            this.app.appendChild(route.render());
        }
    } else {
        history.replaceState('', '', '/');
        this._renderRouter();
    }
}

/**
 * Initializes the Router and attaches necessary event listeners 
 * to handle client-side navigation in a Single Page Application (SPA).
 *
 * Details:
 * 1. Listens for `click` events on the document:
 *    - If the clicked element has the `[data-link]` attribute:
 *      - Prevents the default navigation (avoids full page reload).
 *      - Updates the URL with `history.pushState`.
 *      - Calls `_renderRouter()` to render the corresponding view.
 *
 * 2. Listens for the `popstate` event (when the user navigates 
 *    back or forward using the browser buttons):
 *    - Calls `_renderRouter()` to render the view for the current URL.
 *
 * 3. Listens for the `DOMContentLoaded` event (when the initial DOM is ready):
 *    - Calls `_renderRouter()` to render the initial view.
 *
 * @method
 * @memberof Router
 */
Router.prototype.init = function() {
    window.addEventListener('click', event => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            history.pushState('', '', event.target.href);
            this._renderRouter();
        } 
    })
    window.addEventListener('popstate', () => this._renderRouter());
    window.addEventListener('DOMContentLoaded', () => this._renderRouter());
}

export default Router;