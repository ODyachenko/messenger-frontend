import { FC } from 'react';
import { FieldType } from '../../@types';

const Field: FC<FieldType> = ({
  handler,
  className,
  type,
  placeholder,
  name,
  errors,
  register,
}) => {
  return (
    <label className="block mb-4">
      <span className="block text-sm mb-1">{placeholder}</span>
      <input
        className={`${
          className ? className : ''
        } bg-white border border-solid border-primary-grey rounded-md px-4 py-2 `}
        type={type}
        onChange={handler}
        placeholder={placeholder}
        {...register}
      />
      {errors[name] && (
        <span className="block text-red-500 pt-1">{errors[name].message}</span>
      )}
    </label>
  );
};

export default Field;
