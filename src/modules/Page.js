import Templator from '../utils/Templator';
import * as templates from '../pages/*/*.tmpl.js';


export default class Page {
    constructor(root, context, templ) {
        this.root = root;
    }

    getParameters(name) {

        // const parametersPath = `../pages/${name}/${name}.tmpl`

        // const parameters = import(parametersPath)
        // return parameters
    }

    render(root, name) {
        const templ = templates[name][name].default.templ
        const context = templates[name][name].default.context


        const tmpl = new Templator(templ);
        const renderedTemplate = tmpl.compile(context);
        root.innerHTML = renderedTemplate;
    }

}