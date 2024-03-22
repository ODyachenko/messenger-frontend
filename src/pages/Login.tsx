import React, { FC, useEffect } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';
import { useAppSelector } from '../hooks/hooks';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Wrapper className="login py-4 lg:py-10">
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
