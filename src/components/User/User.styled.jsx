import styled from 'styled-components';
import BackGroundImg from '../../images/BackGround.png';

export const UserCard = styled.li`
  position: relative;

  width: 380px;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 36px;

  background-image: url(${BackGroundImg}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top 28px center, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const UserAvatarBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 178px;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: #ebd8ff;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  &::before {
    content: '';
    position: absolute;
    right: 80px;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
  &::after {
    content: '';
    position: absolute;
    left: 80px;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
`;

export const UserAvatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #5736a3;
`;

export const UserDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
  margin-top: auto;
`;

export const UserDescription = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  width: 196px;
  padding: 14px 0;

  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#EBD8FF'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  text-transform: uppercase;

  transition: background-color 200ms linear;
`;
