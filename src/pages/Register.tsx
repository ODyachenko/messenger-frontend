import React, { FC } from 'react';
import RegisterForm from '../components/Forms/RegisterForm';
import Wrapper from '../components/Wrapper/Wrapper';

const Register: FC = () => {
  return (
    <Wrapper className="register py-4 lg:py-10">
      <RegisterForm />
    </Wrapper>
  );
};

export default Register;
