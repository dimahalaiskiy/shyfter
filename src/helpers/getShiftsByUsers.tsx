interface Shifts {
  id: number;
  recordId: number;
  start: string;
  end: string;
}

interface Users {
  recordId: number;
  displayName: string;
  initials: string;
  shifts?: Shifts[];
}

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
