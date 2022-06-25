
import './styles.css';
import Router from './router/Router';
console.log('hey', process.env.API_URL)
new Router('#app', ['login', 'chat', 'registration', '404', '500'])
