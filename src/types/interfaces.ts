export interface Shifts {
  id: number;
  recordId: number;
  start: string;
  end: string;
}

export interface Users {
  recordId: number;
  displayName: string;
  initials: string;
  shifts?: Shifts[];
}

export interface UserItemProps {
  user: Users;
  week: Date[];
}

export interface RechercherProps {
  week: Date[];
  queryHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  query: string;
}

export interface UsersListProps {
  users?: Users[];
  week: Date[];
}

export interface HeaderProps {
  week: Date[];
  decrementDate: () => void;
  incrementDate: () => void;
}

export interface DaySquareProps {
  day: Date;
  userShifts?: Shifts[];
}

export interface DaySectionProps {
  day: String;
  dayNumber: Number | String;
}
