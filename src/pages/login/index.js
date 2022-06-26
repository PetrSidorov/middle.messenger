import template from './login.tmpl';

const context = {

  formHeading: 'Login',
  primaryButtonName: 'Sign in',
  secondaryButtonName: 'Create account',
  login: 'Enter your login here',
  login_label: 'Login',
  password: '****',
  password_label: 'Password',
  primaryButtonClick: () => {
    window.event.preventDefault()
    document.location.href = '#chat';
  },
  secondaryButtonClick: () => {
    window.event.preventDefault()
    document.location.href = '#registration';
  },
};

export default { context, template };
