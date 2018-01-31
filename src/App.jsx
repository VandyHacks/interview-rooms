import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import fecha from 'fecha';

import '../app.css';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
`;

const App = ({ roomData, today }) => (
    <Schedule>
        {roomData
            .filter(({ date }) => fecha.parse(date, 'MM/DD/YYYY') >= today)
            .map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>
);

export default node => props => ReactDOM.render(<App {...props} />, node);
