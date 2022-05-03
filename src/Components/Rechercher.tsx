import React from 'react';
import { RechercherConrainer, QuerySection, Input } from './Components.styled';
import { weekDays } from '../helpers/date';
import DaySection from './DaySection';

interface Props {
  week: Date[];
  queryHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  query: string;
}

const Rechercher: React.FC<Props> = ({ week, queryHandler, query }) => {
  return (
    <RechercherConrainer>
      <QuerySection>
        <Input
          type='text'
          placeholder='Rechercher...'
          value={query}
          onChange={queryHandler}
        />
      </QuerySection>
      {weekDays(week).map((week) => {
        return (
          <DaySection
            key={week.dayNumber}
            day={week.day}
            dayNumber={week.dayNumber}
          />
        );
      })}
    </RechercherConrainer>
  );
};

export default Rechercher;
