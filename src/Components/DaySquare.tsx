import React, { useState, useEffect } from 'react';
import { DaySection } from '../styles/Components.styled';
import { DaySquareProps } from '../types/interfaces';
import { getCurrentShifts } from '../helpers/getShiftsByUsers';

const DaySquare: React.FC<DaySquareProps> = ({ day, userShifts }) => {
  const [shifts, setShifts] = useState<string[]>([]);

  useEffect(() => {
    if (userShifts) {
      setShifts(getCurrentShifts(userShifts));
    }
  }, [day, userShifts]);

  const currentDate = day.getMonth().toString() + day.getDate().toString();
  return (
    <DaySection>{shifts.includes(currentDate) ? 'work day' : ''}</DaySection>
  );
};

export default DaySquare;
