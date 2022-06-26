import { default as buttonPrimary } from '../../../components/buttons/buttonPrimary/buttonPrimary.tmpl';
import { default as buttonSuccess } from '../../../components/buttons/buttonSuccess/buttonSuccess.tmpl';
import { default as buttonWarning } from '../../../components/buttons/buttonWarning/buttonWarning.tmpl';

const template = `
<div class="settings">
    <div class="settings-heading">
        <div class="avatar-rounded">
            <img src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png" alt="">
        </div>
        <h2 class="center-text">{{ nameHeading }}</h2>
    </div>
    <div class="settings-table">
        <div class="table-row">
            <span class="setting-name">Старый пароль</span>
            <span data-editable class="setting-value"></span>
        </div>
        <div class="table-row">
        <span class="setting-name">Новый пароль</span>
        <span data-editable class="setting-value">i</span>
    </div>
    </div>
    <div class="action-buttons">
    ${buttonPrimary}
    ${buttonSuccess}
    </div>

</div>
`;
export default template;
