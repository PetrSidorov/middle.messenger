import {
    get
} from './get.js';

export default class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;

    constructor(template) {
        this._template = template;
    }

    compile(ctx) {
        return this._compileTemplate(this._tempalte, ctx);
    }

    _compileTemplate(template, ctx) {
        let tmpl = this._template;
        let key = null;
        const regExp = this.TEMPLATE_REGEXP;

        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const tmplValue = key[1].trim();
                // get — функция, написанная ранее в уроке
                const data = get(ctx, tmplValue);
                // func test
                if (typeof data === "function") {
                    window[tmplValue] = data;
                    tmpl = tmpl.replace(
                      new RegExp(key[0], "gi"),
                      `window.${key[1].trim()}()`
                    );
                    continue;
                  }
                // func test
                tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
            }
        }

        return tmpl;
    }
}