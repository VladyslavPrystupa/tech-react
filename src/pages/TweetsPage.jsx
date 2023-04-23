import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonLoadMore } from 'components/ButtonLoadMore/ButtonLoadMore';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { UsersList } from 'components/UsersList/UsersList';
import { fetchUsers } from 'services/api';
import { ALL_USERS, TOTAL_PAGES } from 'services/utils';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';

export const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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
    <main>
      <Container>
        {!isLoading && (
          <Link to={backLink.current}>
            <ButtonGoBack />
          </Link>
        )}

        <UsersList users={users} />
        {isLoading ? (
          <Loader />
        ) : (
          showBtn && <ButtonLoadMore onClick={handleClick} />
        )}
      </Container>
    </main>
  );
};
