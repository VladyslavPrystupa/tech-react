import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
  width: 100%;
  height: 80px;

  background-color: #ebd8ff;

  box-shadow: -1px 3px 10px rgba(0, 0, 0, 0.23);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  font-weight: 700;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #373737;

  &.active {
    color: #5cd3a8;
  }
`;
