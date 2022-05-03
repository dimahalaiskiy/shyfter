import React, { useState, useEffect } from 'react';
import './App.css';
import { getWeek } from './helpers/date';
import { OuterLayout } from './Components/Components.styled';
import { getUsers, getShifts } from './services/api';
import Header from './Components/Header';
import Rechercher from './Components/Rechercher';

const App = () => {
  const [day, setDay] = useState<Date>(new Date());
  const [week, setWeek] = useState(getWeek(day));

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

  const [users, setUsers] = useState<Users[]>([]);
  const [shifts, setShifts] = useState<Shifts[]>([]);
  const [userWithShifts, setUserWithShifts] = useState<Shifts[]>([]);

  const decrementDateHandler = () => {
    let decrementWeek = day.setDate(day.getDate() - 7);
    setDay(new Date(decrementWeek));
    setWeek(getWeek(day));
  };
  const incrementDateHandler = () => {
    let incrementWeek = day.setDate(day.getDate() + 7);
    setDay(new Date(incrementWeek));
    setWeek(getWeek(day));
  };

  const allUsers = async () => {
    setUsers(await getUsers());
  };

  const allShifts = async () => {
    setShifts(await getShifts());
  };

  const getShiftsByUsers = (users: Users[], shifts: Shifts[]) => {
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

  useEffect(() => {
    allUsers();
    allShifts();
    setUserWithShifts(getShiftsByUsers(users, shifts));
  }, [users, shifts]);

  return (
    <OuterLayout>
      <Header
        week={week}
        incrementDate={incrementDateHandler}
        decrementDate={decrementDateHandler}
      />
      <Rechercher week={week} />
    </OuterLayout>
  );
};

export default App;
