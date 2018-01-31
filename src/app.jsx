import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import fecha from 'fecha';

import '../app.css';
import roomData from './rooms.js';
import DateCard from './DateCard.jsx';

const Schedule = styled.div`
    padding: 0.5em;
`;

const getToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return { today };
};

class App extends Component {
    state = getToday();

    componentDidMount() {
        setInterval(() => this.setState(getToday()), 1000);
    }

    render() {
        const { today } = this.state;
        return (
            <Schedule>
                {roomData
                    .filter(
                        ({ date }) => fecha.parse(date, 'MM/DD/YYYY') >= today
                    )
                    .map((entry, i) => <DateCard key={i} {...entry} />)}
            </Schedule>
        );
    }
}

render(<App />, document.getElementById('app'));
