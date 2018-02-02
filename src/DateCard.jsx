import React from 'react';
import styled from 'styled-components';

import RoomEntry from './RoomEntry.jsx';

const DateCard = styled.div`
    padding: 0.5em;
    margin: 0.5em 0;
    display: inline-block;
    vertical-align: top;
    width: 100%;

    @media screen and (min-width: 540px) {
        width: 50%;
    }

    @media screen and (min-width: 840px) {
        width: 33.33%;
    }

    @media screen and (min-width: 1200px) {
        width: 25%;
    }
`;

const Date = styled.h3`
    text-decoration: underline;
    text-align: center;
    font-weight: normal;
    margin: 0 0 1.25em;
`;

export default ({ date, rooms }) => (
    <DateCard>
        <Date>{date}</Date>
        <div>{rooms.map((room, i) => <RoomEntry key={i} {...room} />)}</div>
    </DateCard>
);
