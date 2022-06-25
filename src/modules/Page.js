import * as parameters from '../pages/*/index.js';
import { currentRoute } from '../utils/currentRoute';
import { applyRenderParameters } from '../utils/applyRenderParameters';
export default class Page {
    constructor(root, route) {
        this.root = root;
        this.route = route;
    }

    render(root, name) {
        const parameter = parameters[name].default
        const template = parameter.template
        const context = parameter.context
        applyRenderParameters(template, context)
    }

    static reRender(newTemplate, newContext) {
        const name = currentRoute()
        let context = Object.assign({}, parameters[name].default.context)
        Object.keys(context).forEach(function (key) {
            if (newContext[key] != null) {
                context[key] = newContext[key];
            }
        })

        let template = newTemplate || parameters[name].default.template
        applyRenderParameters(template, context)

    }




}