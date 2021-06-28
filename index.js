import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// 统一管理全局 maintainable
import './main.css';

// ReactDom.render(
//     // tag name, attribute, children
//     React.createElement('div', {
//         id: 'my-div',
//     }, 'hello world'),
//     document.querySelector('#app')
// );

ReactDom.render(
    (<App />),
    document.querySelector('#app')
)