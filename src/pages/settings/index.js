import template from './settings.tmpl';
import Page from '../../modules/Page';
import { default as editDataContext } from './changeData/context';
import { default as changePasswordTemplate } from './changePassword/changePassword.tmpl';
import { default as editPasswordContext } from './changePassword/context';
import { default as changeDataTemplate } from './changeData/changeData.tmpl';

let clicked = false;

const context = {
  email_label: 'Email@yandex.ru',
  email: 'test@yandex.ru',
  login_label: 'Login',
  login: 'Login',
  first_name_label: 'Ivan',
  first_name: 'Ivan',
  second_name_label: 'Ivanov',
  second_name: 'Ivanov',
  nickname: 'Ivanich',
  nickname_login: 'Nickname',
  phone_label: 'Phone',
  phone: '+7 (909) 888 88 88',
  password_label: 'Password',
  nameHeading: 'Ivan',
  primaryButtonName: 'Изменить данные',
  secondaryButtonName: 'No account?',
  warningButtonName: 'Изменить пароль',
  successButtonName: 'Выйти',
  avatar: 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png',

  primaryButtonClick: () => {
    const passingContext = clicked ? context : editDataContext;
    Page.reRender(changeDataTemplate, passingContext);
    const editableSpans = document.querySelectorAll('[data-editable]');

    editableSpans.forEach((element) => {
      element.setAttribute('contenteditable', !clicked);
    });
    clicked = !clicked;
  },

  warningButtonClick: () => {
    Page.reRender(changePasswordTemplate, editPasswordContext);
  },
};

export default { context, template };
