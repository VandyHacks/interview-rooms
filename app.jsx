import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import './app.css';
import roomData from './rooms.json';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 20px;
    font-family: Sofia Pro;
`;

render(
    <Schedule>
        {roomData.map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>,
    document.getElementById('app')
);
