import { Users, Shifts } from '../types/interfaces';

export const getShiftsByUsers = (users: Users[], shifts: Shifts[]) => {
  const currentShift = (recordId: number, shifts: Shifts[]) => {
    let shift = shifts.filter((el) => recordId === el.recordId);
    return shift;
  };

  let shiftsWithUsers: any = users.map((user) => {
    let userWithShifts = {
      ...user,
      shifts: currentShift(user.recordId, shifts),
    };
    return userWithShifts;
  });

  return shiftsWithUsers;
};

export const getCurrentShifts = (userShifts: Shifts[]) => {
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
