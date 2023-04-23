import styled from 'styled-components';

export const LoadMore = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  width: 196px;
  padding: 14px 0;
  margin: 0 auto;

  background-color: #3af2af;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;
  color: #373737;
  text-transform: uppercase;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
