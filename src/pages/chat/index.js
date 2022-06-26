import template from './chat.tmpl';

const context = {
    message: 'Hello!',
    
    handleClick: () => {
        console.log('hello')
    }
}

export default {context, template}