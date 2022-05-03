import React from 'react';
import { DayContainer } from '../styles/Components.styled';
import { DaySectionProps } from '../types/interfaces';

const DaySection: React.FC<DaySectionProps> = ({ day, dayNumber }) => {
  return (
    <DayContainer>
      {day} <p>{dayNumber.toString()}</p>
    </DayContainer>
  );
};

export default DaySection;
