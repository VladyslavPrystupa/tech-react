import { LineWave } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.style';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LineWave
        height="150"
        width="150"
        color="#5cd3a8"
        ariaLabel="line-wave"
        visible={true}
      />
    </LoaderWrapper>
  );
};
