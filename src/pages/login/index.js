import Page from '../../modules/Page'
import {templ, context} from './login.tmpl'
export default class Login extends Page {
    constructor(param){
        super(param)
        this.templ = templ;
        this.context = context;
       
        // this.param = param
        // console.log('param', param)
    }

    get parameters(){
        return {templ, context}
    }
    render(tmpl, context){
        super.render(tmpl, context)
    }
    
    // login(){
    //     console.log('called')
    //     return this.login()
    // }
}