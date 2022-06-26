import './styles.css';
import Router from './router/Router';

new Router('#app', ['login', 'chat', 'registration', '404', '500']);
