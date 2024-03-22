import React, { FC, useEffect } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';
import Wrapper from '../components/Wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

const Register: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <Wrapper className="register py-4 lg:py-10">
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
