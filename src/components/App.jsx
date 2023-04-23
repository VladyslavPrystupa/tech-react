import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyles } from './GlobalStyles';

const Home = lazy(() => import('../pages/HomePage'));
const Tweets = lazy(() => import('../pages/TweetsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
