import React from 'react';
import {
  RechercherConrainer,
  QuerySection,
  Input,
} from '../styles/Components.styled';
import { weekDays } from '../helpers/date';
import DaySection from './DaySection';
import { RechercherProps } from '../types/interfaces';

const Rechercher: React.FC<RechercherProps> = ({
  week,
  queryHandler,
  query,
}) => {
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
