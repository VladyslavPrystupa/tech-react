import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Header, Link, Navigation } from './SharedLayout.styled';
import { Container } from 'components/Container/Container';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <Link to="/">Home</Link>

            <Link to="/tweets">tweets</Link>
          </Navigation>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
