import template from './login.tmpl';
const context = {

    formHeading: 'Login',
    primaryButtonName: 'Sign in',
    secondaryButtonName: 'Create account',
    login: 'Login',
    login_label: 'Login',
    password: '****',
    password_label: 'Password',
    primaryButtonClick: () => {
        document.location.href = '#chat'
    },
    secondaryButtonClick: () => {
        console.log('hello')
        document.location.href = '#registration'
    }
}

export default {context, template}