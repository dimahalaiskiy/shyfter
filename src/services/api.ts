import axios from 'axios';

const USERS = 'http://localhost:3000/users';
const SHIFTS = 'http://localhost:3000/shifts';

export const getUsers = async () => {
  try {
    const { data } = await axios(USERS);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getShifts = async () => {
  try {
    const { data } = await axios(SHIFTS);
    return data;
  } catch (error) {
    console.log(error);
  }
};
