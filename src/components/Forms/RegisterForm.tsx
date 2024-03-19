import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Field from '../../UI/Field';
import Btn from '../../UI/Btn';
import { CreateUserType } from '../../../@types';
import { useCreateUserMutation } from '../../redux/API/userAPI';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserType>();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateUserType> = async (data) => {
    try {
      const response = await createUser(data).then((res: any) => res);

      if (response.error) {
        throw response.error;
      }
      navigate(-1);
    } catch (error: any) {
      console.error(error.data.non_field_errors);
      // setAuthErrors(error.data.non_field_errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-96 border border-solid border-primary-grey rounded-xl py-6 px-5 mx-auto"
    >
      <h1 className="title text-center mb-5">Sign Up</h1>
      <Field
        className="w-full bg-primary-grey"
        type="text"
        placeholder="First name"
        name="first_name"
        register={{
          ...register('first_name', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Min length is 2' },
            maxLength: { value: 30, message: 'Max length is 30' },
          }),
        }}
        errors={errors}
      />
      <Field
        className="w-full bg-primary-grey"
        type="text"
        placeholder="Last name"
        name="last_name"
        register={{
          ...register('last_name', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Min length is 2' },
            maxLength: { value: 30, message: 'Max length is 30' },
          }),
        }}
        errors={errors}
      />
      <Field
        className="w-full bg-primary-grey"
        type="text"
        placeholder="Username"
        name="username"
        register={{
          ...register('username', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Min length is 2' },
            maxLength: { value: 30, message: 'Max length is 30' },
          }),
        }}
        errors={errors}
      />
      <Field
        className="w-full bg-primary-grey"
        type="email"
        placeholder="E-mail"
        name="email"
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
        name="password"
        register={{
          ...register('password', {
            required: 'This field is required',
            minLength: { value: 8, message: 'Min length is 8' },
            maxLength: { value: 40, message: 'Max length is 40' },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
              message:
                'Your password must have at least 8 characters, at least one number, and at least one special character',
            },
          }),
        }}
        errors={errors}
      />
      <Btn
        type="submit"
        value={isLoading ? <BeatLoader color="#fff" /> : `Sign Up`}
        variant="primary"
      />
    </form>
  );
};

export default RegisterForm;
