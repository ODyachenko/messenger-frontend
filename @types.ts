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
  value: string | React.ReactNode;
  handler?: () => void;
  type: 'button' | 'submit';
  variant: 'primary' | 'secondary';
};

export type ActionBtn = {
  className?: string;
  handler?: () => void;
};

export type CreateUserType = {
  id?: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: any;
  password: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type UserInfoType = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  avatar: string;
  email: string;
};

export type ChatMsgType = {
  id: number;
  // room: any;
  text: string;
  user: UserInfoType;
  created_at_formatted: string;
};

export type ChatListType = {
  id: number;
  current_users: UserInfoType;
  host: UserInfoType;
  messages: ChatMsgType[];
  last_message: ChatMsgType;
};

export type ChatType = {
  id: number;
  current_users: UserInfoType;
  host: UserInfoType;
  messages: ChatMsgType[];
  last_message: ChatMsgType;
  is_read: boolean;
  isActive: number;
  setIsActive: (id: number) => void;
};
