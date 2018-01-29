import React from 'react';
import styled from 'styled-components';

import RoomEntry from './RoomEntry.jsx';

const DateCard = styled.div`
    margin: 20px 1em 0;
    display: inline-block;
    width: 300px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;

const Date = styled.h3`
    text-decoration: underline;
    text-align: center;
    font-weight: 400;
    margin-bottom: 1.25em;
`;

export default ({ date, rooms }) => (
    <DateCard>
        <Date>{date}</Date>
        <div>{rooms.map((room, i) => <RoomEntry key={i} {...room} />)}</div>
    </DateCard>
);
