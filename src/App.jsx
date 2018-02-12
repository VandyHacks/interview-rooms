import { h, render } from 'preact';
import styled from 'preact-emotion';
import fecha from 'fecha';

import '../app.css';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;

    @media screen and (min-width: 576px) {
        padding: 1.5em;
    }
`;
const parseDate = date => fecha.parse(date, 'MM/DD/YYYY');

const App = ({ roomData, today }) => (
    <Schedule>
        {roomData
            .filter(({ date }) => parseDate(date) >= today)
            .map((entry, i) => <DateCard key={i} {...entry} />)}
    </Schedule>
);

export default node => props =>
    render(<App {...props} />, node, node.lastChild);
