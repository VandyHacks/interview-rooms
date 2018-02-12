import { h } from 'preact';
import styled from 'preact-emotion';

const RoomEntry = styled.div`
    padding: 0.75em;

    & > div {
        display: inline-block;
    }

    &:nth-child(odd) {
        background: rgba(255, 255, 255, 0.05);
    }
`;

const Location = styled.div`
    font-weight: 700;
`;

const Time = styled.div`
    float: right;
`;

export default ({ start, end, room }) => (
    <RoomEntry>
        <Location>{room}</Location>
        <Time>
            {start}-{end}
        </Time>
    </RoomEntry>
);
