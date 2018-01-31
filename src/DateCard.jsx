import React from 'react';
import styled from 'styled-components';

import RoomEntry from './RoomEntry.jsx';

const DateCard = styled.div`
    margin: .5em;
    display: inline-block;
    vertical-align: top;
    width: 320px;
`;

const Date = styled.h3`
    text-decoration: underline;
    text-align: center;
    font-weight: normal;
    margin-bottom: 1.25em;
`;

export default ({ date, rooms }) => (
    <DateCard>
        <Date>{date}</Date>
        <div>{rooms.map((room, i) => <RoomEntry key={i} {...room} />)}</div>
    </DateCard>
);
