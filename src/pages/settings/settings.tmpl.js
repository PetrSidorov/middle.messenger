import { default as buttonPrimary } from '../../components/buttons/buttonPrimary/buttonPrimary.tmpl';
import { default as buttonSuccess } from '../../components/buttons/buttonSuccess/buttonSuccess.tmpl';
import { default as buttonWarning } from '../../components/buttons/buttonWarning/buttonWarning.tmpl';

const template = `
<div class="settings">
    <div class="settings-heading">
        <div class="avatar-rounded">
            <img src="{{ avatar }}" alt="">
        </div>
        <h2 class="center-text">{{ nameHeading }}</h2>
    </div>
    <div class="settings-table">
        <div class="table-row">
            <span class="setting-name">{{ email_label }}</span>
            <span data-editable class="setting-value">{{ email }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ login_label }}</span>
            <span data-editable class="setting-value">{{ login }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ first_name_label }}</span>
            <span data-editable class="setting-value">{{ first_name }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ second_name_label }}</span>
            <span data-editable class="setting-value">{{ second_name }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ nickname_label }}</span>
            <span data-editable class="setting-value">{{ nickname }}</span>
        </div>
        <div class="table-row">
            <span class="setting-name">{{ phone_label }}</span>
            <span data-editable class="setting-value">{{ phone }}</span>
        </div>
        <div>
            <label for="file">Choose avatar to upload</label>
            <input type="file" id="file" name="file">
        </div>
    </div>
    <div class="action-buttons">
    ${buttonPrimary}
    ${buttonWarning}
    ${buttonSuccess}
    </div>

</div>
`;
export default template;
