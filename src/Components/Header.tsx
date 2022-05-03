import React from 'react';
import { getDay, getMonth } from '../helpers/date';
import {
  ArrowButton,
  HeaderContainer,
  DateSection,
  InnerLayout,
} from '../styles/Components.styled';

import { HeaderProps } from '../types/interfaces';

const Header: React.FC<HeaderProps> = ({
  week,
  incrementDate,
  decrementDate,
}) => {
  return (
    <InnerLayout>
      <HeaderContainer>
        <ArrowButton onClick={decrementDate} type='button'>
          &#8592;
        </ArrowButton>
        <DateSection>
          {getDay(week[0])} {getMonth(week[0])}. - {getDay(week[6])} {''}
          {getMonth(week[6])}.
        </DateSection>
        <ArrowButton onClick={incrementDate} type='button'>
          &#8594;
        </ArrowButton>
      </HeaderContainer>
    </InnerLayout>
  );
};

export default Header;
