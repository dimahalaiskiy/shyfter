import React from 'react';
import { DaySection } from './Components.styled';

interface Props {
  day: Date;
}

const DaySquare: React.FC<Props> = ({ day }) => {
  return <DaySection>{day.getDate()}</DaySection>;
};

export default DaySquare;
