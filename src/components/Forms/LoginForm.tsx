import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Field from '../../UI/Field';
import Btn from '../../UI/Btn';
import { LoginUserType } from '../../../@types';

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>();

  const onSubmit: SubmitHandler<LoginUserType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-96 border border-solid border-primary-grey rounded-xl py-6 px-5 mx-auto"
      >
        <h1 className="title text-center mb-5">Login</h1>
        <Field
          className="w-full bg-primary-grey"
          type="email"
          placeholder="E-mail"
          name={'email'}
          register={{
            ...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please enter valid email',
              },
            }),
          }}
          errors={errors}
        />
        <Field
          className="w-full bg-primary-grey"
          type="password"
          placeholder="Password"
          name={'password'}
          register={{
            ...register('password', {
              required: 'This field is required',
              minLength: { value: 8, message: 'Min length is 8' },
              maxLength: { value: 40, message: 'Max length is 40' },
            }),
          }}
          errors={errors}
        />
        <Btn type="submit" value="Login" variant="primary" />
      </form>
      <Link className="block text-center pt-2" to={'/register'}>
        Don't have an account?
      </Link>
    </>
  );
};

export default LoginForm;
