import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.style';

export const Loader = () => {
  return (
    <LoaderBox>
      <ThreeDots
        height="80"
        width="80"
        color="#471ca9"
        radius="10"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="three-dots-loading"
      />
    </LoaderBox>
  );
};
