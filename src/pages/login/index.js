import template from './login.tmpl';
const context = {

    formHeading: 'Login',
    primaryButtonName: 'Authorize',
    secondaryButtonName: 'No account?',
    inputs: {
        login: {
            placeholder: 'Login'
        },
        password: {
            placeholder: 'Password'
        }
    },
    primaryButtonClick: () => {
        document.location.href = 'http://localhost:1234/#rchat'
    },
    secondaryButtonClick: () => {
        console.log('hello')
        document.location.href = 'http://localhost:1234/#registration'
    }
}

export default {context, template}