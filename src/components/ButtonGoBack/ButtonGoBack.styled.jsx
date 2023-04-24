import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  width: 100px;
  padding: 10px 0;
  margin-bottom: 15px;

  background-color: #3af2af;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;
  color: #373737;
  text-transform: uppercase;

  transition: background-color 150ms linear;

  &:hover,
  &:focus {
    background-color: #5cd3a7bf;
  }
`;
