import {
    default as buttonPrimary
} from '../../components/buttons/buttonPrimary/buttonPrimary.tmpl'

const template = `
<form class="entry-form">
<h2 class="center-text">{{ formHeading }}</h2>
<div class="input-section">

    <div class="form-field">
        <input required pattern="\S+.*" id="username" class="form-text-input" type="text">
        <label class="input-label" for="username">{{ inputs.email.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.login.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.name.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.surname.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.tel.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.password.placeholder }}</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">{{ inputs.confirmPassword.placeholder }}</label>
    </div> 
</div>

<div class="action-buttons">
    ${buttonPrimary}
</div>
</form>
`;
export default template;