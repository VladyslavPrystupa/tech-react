import { useEffect, useState } from 'react';
import { UsersList } from './UsersList/UsersList';
import { fetchUsers } from 'services/api';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';
import { ALL_USERS, TOTAL_PAGES } from 'services/utils';
import { Loader } from './Loader/Loader';
import { GlobalStyles } from './GlobalStyles';
import { Container } from './Container/Container';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetchUsers(page);
        response.length === 0 || page === TOTAL_PAGES
          ? setShowBtn(false)
          : setShowBtn(true);

        setUsers(prevUsers => [...prevUsers, ...response]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
    if (ALL_USERS / page === TOTAL_PAGES) {
      setShowBtn(false);
    }
  };

  return (
    <Container>
      <UsersList users={users} />
      {isLoading ? (
        <Loader />
      ) : (
        showBtn && <ButtonLoadMore onClick={handleClick} />
      )}
      <GlobalStyles />
    </Container>
  );
};
