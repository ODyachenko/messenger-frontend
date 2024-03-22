import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { setCurrentUser, setIsAuth } from './redux/slices/userSlice';
import { useGetUserInfoQuery } from './redux/API/userAPI';

function App() {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { data } = useGetUserInfoQuery('', {
    skip: !isAuth,
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem('token')
      ? dispatch(setIsAuth(true))
      : navigate('/login');
  }, [dispatch]);

  useEffect(() => {
    data && dispatch(setCurrentUser(data));
  }, [data, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
