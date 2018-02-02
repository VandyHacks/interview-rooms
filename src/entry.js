import renderToNode from './App.jsx';
import roomData from './rooms.js';

const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return { today };
};
const render = renderToNode(document.getElementById('app'));

let state = { roomData, ...getToday() };

render(state);
setInterval(() => {
    state = { ...state, ...getToday() };
    render(state);
}, 1000);
