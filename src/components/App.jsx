
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Loader from './Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    isRefreshing ? <Loader /> : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo='/contacts' />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo='/contacts' />} />
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo='/login' />} />
        </Route>
      </Routes>
    )
  );
};
