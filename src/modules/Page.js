import Templator from '../utils/Templator'
export default class Page {
    constructor(root, html, context, templ) {
        // this.html = html;
        this.root = root;
        this.context = context;
        this.templ = templ;
    }

    test(){
        console.log('test')
    }

    render(root, {templ, context}) {
        // console.log(context)
        const tmpl = new Templator(templ);
        const renderedTemplate = tmpl.compile(context);
        root.innerHTML = renderedTemplate;
    }
}