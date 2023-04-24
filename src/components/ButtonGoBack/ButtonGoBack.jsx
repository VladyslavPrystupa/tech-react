import { GoBack, StyledLink } from './ButtonGoBack.styled';

export const ButtonGoBack = ({ link }) => {
  return (
    <StyledLink to={link}>
      <GoBack>Go back</GoBack>
    </StyledLink>
  );
};
