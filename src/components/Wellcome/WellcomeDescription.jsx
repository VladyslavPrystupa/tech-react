import WellcomeImg from '../../images/welcome.jpg';
import { Box, Header } from './WellcomeDescription.styled';

export const WellcomeDescription = () => {
  return (
    <Box>
      <Header>Wellcome to the app!</Header>
      <img
        width={500}
        height={500}
        src={WellcomeImg}
        loading="lazy"
        alt="wellcome image"
      />
    </Box>
  );
};
