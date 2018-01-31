import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import fecha from 'fecha';

import { Provider, connect } from 'redux-zero/react';
import { actions, store, mapToProps } from './state-store';

import '../app.css';
import roomData from './rooms.js';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
`;

const App = connect(mapToProps)(({ today }) => (
    <Schedule>
        {roomData
            .filter(({ date }) => fecha.parse(date, 'MM/DD/YYYY') >= today)
            .map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>
));

setInterval(actions(store).refreshDate, 1000);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
