import template from './settings.tmpl';
import Page from '../../modules/Page'
import { default as editDataContext } from './changeData/context'
import {default as changePasswordTemplate} from './changePassword/changePassword.tmpl';
import {default as editPasswordContext} from './changePassword/context'

let clicked = false

const context = {
    nameHeading: 'Ivan',
    primaryButtonName: 'Изменить данные',
    secondaryButtonName: 'No account?',
    warningButtonName: 'Изменить пароль',
    successButtonName: 'Выйти',

    primaryButtonClick: () => {
        const passingContext = clicked ? context : editDataContext;
        Page.reRender(null, passingContext);
        let editableSpans = document.querySelectorAll('[data-editable]')

        editableSpans.forEach(element => {
            element.setAttribute('contenteditable', !clicked)
        });
        clicked = !clicked
    },

    warningButtonClick: () => {
        Page.reRender(changePasswordTemplate, editPasswordContext)
    }
}

export default {context, template}