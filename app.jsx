import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import './app.css';
import roomData from './rooms.js';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
    font-family: 'Sofia Pro', sans-serif;
`;

render(
    <Schedule>
        {roomData.map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>,
    document.getElementById('app')
);
