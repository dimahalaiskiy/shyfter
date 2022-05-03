export const getWeek = (fromDate: Date) => {
  let sunday = new Date(
      fromDate.setDate(fromDate.getDate() - fromDate.getDay())
    ),
    result = [new Date(sunday)];
  while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
    result.push(new Date(sunday));
  }
  return result;
};

const monthNames: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const weekDays = (fromDate: Date[]) => {
  const days = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];

  let result = fromDate.map((date) => {
    let dayNumber: number | string = date.getDate();
    let nameOfDay = date.getDay();
    if (dayNumber < 10) {
      dayNumber = `0${dayNumber}`;
    }
    return { day: days[nameOfDay], dayNumber };
  });

  return result;
};

export const getMonth = (fromDate: Date) => {
  return monthNames[fromDate.getMonth()];
};

export const getDay = (fromDate: Date) => {
  let numberOfDay = fromDate.getDate();
  if (numberOfDay < 10) {
    return `0${numberOfDay}`;
  }
  return fromDate.getDate();
};
