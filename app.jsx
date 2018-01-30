import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import fecha from 'fecha';

import './app.css';
import roomData from './rooms.js';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
`;

const today = new Date();
today.setHours(0, 0, 0, 0);

render(
    <Schedule>
        {roomData
            .filter(({ date }) => fecha.parse(date, 'MM/DD/YYYY') >= today)
            .map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>,
    document.getElementById('app')
);
