import template from './registration.tmpl';
const context = {

    formHeading: 'Registration',
    primaryButtonName: 'Register',
    secondaryButtonName: 'No account?',
    inputs: {
        email: {
            placeholder: 'Email@yandex.ru'
        },
        login: {
            placeholder: 'Login'
        },
        name: {
            placeholder: 'Ivan'
        },
        surname: {
            placeholder: 'Ivanov'
        },
        tel: {
            placeholder: '+7 (909) 888 88 88',
        },
        password: {
            placeholder: 'Password'
        },
        confirmPassword: {
            placeholder: 'Repeat password, please'
        }
    },

    primaryButtonClick: () => {
        console.log('hello')
        document.location.href = 'http://localhost:1234/#chat'
    }
}

export default {context, template}