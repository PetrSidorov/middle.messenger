export function login(name) {
  return `    <div class="input-container" input-name=${name}>
 <input required  id="username" class="text-input" type="text">
 <label class="input-label" for="username">Логин</label>
 </div>`;
}
