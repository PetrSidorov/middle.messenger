import {
  default as buttonPrimary,
} from '../../components/buttons/buttonPrimary/buttonPrimary.tmpl';

const template = `
<form class="entry-form">
<h2 class="center-text">{{ formHeading }}</h2>
<div class="entry-form__inputs">

    <div class="input-container">
        <input required id="username" value="{{ email }}" class="text-input" type="text">
        <label class="input-label" for="username">{{ email_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ login }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ login_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ first_name }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ first_name_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ second_name }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ second_name_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ phone }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ phone_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ password }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ password_label }}</label>
    </div>
    <div class="input-container">
        <input required  id="password" value="{{ confirmPassword }}" class="text-input" type="text">
        <label class="input-label" for="password">{{ confirmPassword_label }}</label>
    </div> 
</div>

<div class="action-buttons">
    ${buttonPrimary}
</div>
</form>
`;
export default template;
