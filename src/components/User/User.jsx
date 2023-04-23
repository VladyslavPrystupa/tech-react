import { useEffect, useState } from 'react';
import { putNewFollowers } from 'services/api';
import {
  UserDescriptionBox,
  FollowBtn,
  UserCard,
  UserDescription,
  UserAvatarBox,
  UserAvatar,
  LogoIcon,
} from './User.styled';
import Logo from '../../images/Logo.png';

export const User = ({ id, user, tweets, followers, avatar }) => {
  const [curerntFollowers, setCurerntFollowers] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const parsedFollow = JSON.parse(localStorage.getItem(`follow-User-${id}`));
    if (parsedFollow !== null) {
      setIsFollowing(parsedFollow);
    }
  }, [id]);

  const hadleClick = () => {
    setIsFollowing(!isFollowing);
    localStorage.setItem(`follow-User-${id}`, !isFollowing);

    const updFollowers = isFollowing
      ? curerntFollowers - 1
      : curerntFollowers + 1;
    setCurerntFollowers(updFollowers);
    putNewFollowers(id, updFollowers);
  };

  return (
    <UserCard>
      <a href="https://m.goit.global/ua/new/">
        <LogoIcon src={Logo} alt="Logo" />
      </a>
      <UserAvatarBox>
        <UserAvatar src={avatar} alt="user-avatar" loading="auto" />
      </UserAvatarBox>
      <UserDescriptionBox>
        <UserDescription>
          {tweets} {tweets === 1 ? 'tweet' : 'tweets'}
        </UserDescription>
        <UserDescription>
          {curerntFollowers.toLocaleString('en-US')} followers
        </UserDescription>
      </UserDescriptionBox>
      <FollowBtn isFollowing={isFollowing} onClick={hadleClick}>
        {isFollowing ? 'Following' : 'Follow'}
      </FollowBtn>
    </UserCard>
  );
};
