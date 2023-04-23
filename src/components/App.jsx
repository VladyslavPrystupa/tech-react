import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyles } from './GlobalStyles';
import { Home } from 'pages/HomePage';
import { TweetsPage } from 'pages/TweetsPage';

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
