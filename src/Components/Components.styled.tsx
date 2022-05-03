import styled from 'styled-components';

export const OuterLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 60px;
`;

export const InnerLayout = styled.div`
  padding: 30px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  font-size: 18px;
  border-radius: 50%;
  background-color: #eef2f7;
  border: none;
  cursor: pointer;
`;

export const DateSection = styled.section`
  width: inherit;
  margin-left: 10px;
  margin-right: 10px;
`;

export const RechercherConrainer = styled.section`
  display: grid;
  grid-template-columns: 3fr repeat(7, 1fr);
  grid-auto-rows: 50px;
`;

export const QuerySection = styled.div`
  padding: 10px;
  border: 1px solid #f4f4fb;
  background-color: #f8faff;
`;

export const Input = styled.input.attrs({
  placeholderTextColor: 'red',
})`
  width: 220px;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #f4f4fb;

  ::placeholder {
    font-family: 'Courier New', Courier, monospace;
  }

  &:focus {
    border: 2px solid blue;
  }
`;

export const DayContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f4f4fb;
  background-color: #f8faff;
  font-weight: 600;
`;

export const UserItemSection = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(7, 1fr);
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: left;
`;

export const Initials = styled.span`
  font-size: 26px;
  border-radius: 50%;
  background-color: black;
  color: white;
`;
