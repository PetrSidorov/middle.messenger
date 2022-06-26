import template from './registration.tmpl';
const context = {

    formHeading: 'Registration',
    primaryButtonName: 'Sign up',
    email_label: 'Email@yandex.ru',
    email: 'test@yandex.ru',
    login_label: 'Login',
    login: 'Login',
    first_name_label: 'Ivan',
    first_name: 'Ivan',
    second_name_label: 'Ivanov',
    second_name: 'Ivanov',
    phone_label: '+7 (909) 888 88 88',
    phone: '+7 (909) 888 88 88',
    password_label: 'Password',
    password: '*****',
    confirmPassword: '*****',
    confirmPassword_label: 'Repeat password, please',
    primaryButtonClick: () => {
            console.log('hello')
            document.location.href = '#chat'
        }
    }




export default {context, template}