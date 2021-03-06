import React from 'react';
import { render } from 'react-dom';
import Bubble from './Bubble';
import ChatApp from './container/ChatApp';

import Hello from './Hello';


const rootName = window.chatSettings && window.chatSettings.rootName;
// let rightRoot = document.getElementById('reactRoot');
let rightRoot = document.getElementById('reactRoot');
if (rootName || !rightRoot) {
    const isBubble = !!window.chatSettings.isBubble;
    console.log(rightRoot);
    const div = document.createElement('div');
    div.id = rootName || 'reactRoot';
    console.log(document);
    document.body.appendChild(div);
    const event = new CustomEvent('chatEvent', { detail: Chat.q });
    Chat.q.push = function () {
        window.dispatchEvent(event);
        return Array.prototype.push.apply(this, arguments);
    };
    render(<ChatApp res={{ width: '', height: '' }} />, document.getElementById(div.id));
} else {
    render(<Hello res={{ width: '', height: '' }} />, rightRoot);
}
