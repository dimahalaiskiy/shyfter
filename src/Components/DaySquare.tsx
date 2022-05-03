import React, { useState, useEffect } from 'react';
import { DaySection } from './Components.styled';

interface Props {
  day: Date;
  userShifts?: Shifts[];
}

interface Shifts {
  id: number;
  recordId: number;
  start: string;
  end: string;
}

const DaySquare: React.FC<Props> = ({ day, userShifts }) => {
  const [shifts, setShifts] = useState<string[]>([]);

  const getCurrentShifts = (userShifts: Shifts[]) => {
    let currentShifts: string[] = [];
    userShifts?.forEach((shift: Shifts) => {
      currentShifts.push(
        new Date(shift.start).getMonth().toString() +
          new Date(shift.start).getDate().toString()
      );
      currentShifts.push(
        new Date(shift.end).getMonth().toString() +
          new Date(shift.end).getDate().toString()
      );
    });

    return currentShifts;
  };

  useEffect(() => {
    if (userShifts) {
      setShifts(getCurrentShifts(userShifts));
    }
  }, [day]);

  const currentDate = day.getMonth().toString() + day.getDate().toString();
  return (
    <DaySection>{shifts.includes(currentDate) ? 'work day' : ''}</DaySection>
  );
};

export default DaySquare;
