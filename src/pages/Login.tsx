import React, { FC } from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Wrapper from '../components/Wrapper/Wrapper';

const Login: FC = () => {
  return (
    <Wrapper className="login py-4 lg:py-10">
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
