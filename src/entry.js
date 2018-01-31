import renderToNode from './App.jsx';
import roomData from './rooms.js';

const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return { today };
};
const render = renderToNode(document.getElementById('app'));

let appState = { roomData, ...getToday() };

render(appState);
setInterval(() => {
    appState = { ...appState, ...getToday() };
    render(appState);
}, 1000);
