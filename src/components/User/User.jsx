import { useEffect, useState } from 'react';
import { putNewFollowers } from 'services/api';
import {
  UserDescriptionBox,
  FollowBtn,
  UserCard,
  UserDescription,
  UserAvatarBox,
  UserAvatar,
} from './User.styled';

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
      <UserAvatarBox>
        <UserAvatar src={avatar} alt="user-avatar" loading="auto" />
      </UserAvatarBox>
      <UserDescriptionBox>
        {/* <UserDescription>{user}</UserDescription> */}
        <UserDescription>{tweets} tweets </UserDescription>
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
