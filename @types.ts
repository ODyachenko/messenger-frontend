export type FieldType = {
  className?: string;
  type: 'text' | 'email' | 'password' | 'search';
  placeholder: string;
  handler?: () => void;
  register?: any;
  errors?: any;
  name: string;
};

export type BtnType = {
  className?: string;
  value: string;
  handler?: () => void;
  type: 'button' | 'submit';
  variant: 'primary' | 'secondary';
};

export type CreateUserType = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};
