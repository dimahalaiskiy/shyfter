import React from 'react';
import {
  RechercherConrainer,
  QuerySection,
  Input,
  InnerLayout,
} from './Components.styled';
import { weekDays } from '../helpers/date';
import DaySection from './DaySection';

interface Props {
  week: Date[];
}

const Rechercher: React.FC<Props> = ({ week }) => {
  return (
    <InnerLayout>
      <RechercherConrainer>
        <QuerySection>
          <Input type='text' placeholder='Rechercher...' value='' />
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
    </InnerLayout>
  );
};

export default Rechercher;
