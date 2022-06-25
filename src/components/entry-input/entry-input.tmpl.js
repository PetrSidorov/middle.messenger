export function login(name) {
    return `    <div class="form-field" input-name=${name}>
 <input required pattern="\S+.*" id="username" class="form-text-input" type="text">
 <label class="input-label" for="username">Логин</label>
 </div>`
}