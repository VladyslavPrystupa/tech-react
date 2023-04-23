import { User } from 'components/User/User';
import { List } from './UsersList.styled';

export const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <User
          key={id}
          id={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </List>
  );
};
