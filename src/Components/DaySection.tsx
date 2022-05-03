import React from 'react';
import { DayContainer } from './Components.styled';

interface Props {
  day: String;
  dayNumber: Number | String;
}

const DaySection: React.FC<Props> = ({ day, dayNumber }) => {
  return (
    <DayContainer>
      {day} <p>{dayNumber.toString()}</p>
    </DayContainer>
  );
};

export default DaySection;
