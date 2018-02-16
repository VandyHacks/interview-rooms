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
const StatusMessage = styled.div`
    text-align: center;
    padding: 1.5em;
`;
const parseDate = date => fecha.parse(date, 'MM/DD/YYYY');

const App = ({ roomData, today }) => {
    const rooms = roomData.filter(({ date }) => parseDate(date) >= today);
    return rooms.length > 0 ? (
        <Schedule>
            {rooms.map((entry, i) => <DateCard key={i} {...entry} />)}
        </Schedule>
    ) : (
        <StatusMessage>
            There are currently no interviews scheduled.
        </StatusMessage>
    );
};

export default node => props =>
    render(<App {...props} />, node, node.lastChild);
