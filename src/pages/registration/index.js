import template from './registration.tmpl';

const context = {

  formHeading: 'Registration',
  primaryButtonName: 'Sign up',
  email_label: 'Email',
  email: 'test@yandex.ru',
  login_label: 'Login',
  login: 'Ivanich',
  first_name_label: 'First name',
  first_name: 'Ivan',
  second_name_label: 'Last name',
  second_name: 'Ivanov',
  phone_label: 'Phone number',
  phone: '+7 (909) 888 88 88',
  password_label: 'Password',
  password: '*****',
  confirmPassword: '*****',
  confirmPassword_label: 'Repeat password, please',
  primaryButtonClick: () => {
   window.event.preventDefault()
    document.location.href = '#chat';
  },
};

export default { context, template };
