// import Login from '../pages/login/index';
import Page from '../modules/Page';
export default class Router {
    constructor(root, routes) {
        this.root = root;
        this.routes = routes;
        this.init()
    }

    init() {
        console.log('init')
        const login = new Page
        // this.routes.Login
        login.render(root, 'login')
        window.addEventListener('hashchange', this.changeRoute)
        this.changeRoute()
    }

    changeRoute(event){
        const route = window.location.hash
        // console.log(route)
    }

    // get currentRoute(){
    //     return window.location.hash
    // }

    destroy(){
        window.removeEventListener(this.changeRoute)
    }
}