// import Login from '../pages/login/index';
export default class Router {
    constructor(root, routes) {
        this.root = root;
        this.routes = routes;
        this.init()
    }

    init() {
        console.log('init')
        const login = new this.routes.Login
        login.render(root, login.parameters)
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