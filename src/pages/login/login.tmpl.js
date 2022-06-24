const templ = `
<form class="authorization-form">
<h2 class="center-text">Вход</h2>
<div class="input-section">
    <div class="form-field">
        <input required pattern="\S+.*" id="username" class="form-text-input" type="text">
        <label class="input-label" for="username" >Логин</label>
    </div>
    <div class="form-field">
        <input required pattern="\S+.*" id="password" class="form-text-input" type="text">
        <label class="input-label" for="password">Пароль</label>
    </div>
</div>


<div class="action-buttons">
    <button onclick="{{ handleClick }}" type="submit" class="button button-primary">Авторизоваться</button>
    <button class="button button-link">Нет аккаунта?</button>
</div>
</form>
`;

const context = {
    // field1: 'Text 1',
    // field2: 42,
    // field3: {
    //     info: {
    //         name: 'Simon',
    //     },
    // },
    handleClick: () => {console.log('hello')}
};

export {templ, context}