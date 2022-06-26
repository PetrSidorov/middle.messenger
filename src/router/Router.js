import Page from '../modules/Page';
import { currentRoute } from '../utils/currentRoute';

export default class Router {
  constructor(root, routes) {
    this.init();
    this.root = root;
    this.routes = routes;
  }

  init() {
    window.addEventListener('hashchange', this.changeRoute);
    this.changeRoute();
  }

  changeRoute() {
    let route = currentRoute();
    if (route === '') {
      route = 'login';
    }

    const page = new Page();
    page.render(root, route);
  }

  destroy() {
    window.removeEventListener(this.changeRoute);
  }
}
