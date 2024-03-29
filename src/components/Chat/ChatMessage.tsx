import { FC } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { ChatMsgType } from '../../../@types';

const ChatMessage: FC<ChatMsgType> = ({ text, user, created_at_formatted }) => {
  const { currentUser } = useAppSelector((state) => state.user);
  const { current_users } = useAppSelector((state) => state.chat.activeChat);
  const recieverAvatar = `${import.meta.env.VITE_APP_URL}${
    current_users?.avatar
  }`;

  return (
    <li
      className={`flex max-w-96 items-end gap-3 ${
        user.id !== currentUser.id ? 'flex-row-reverse self-end' : ''
      }`}
    >
      <img
        className="w-9 h-9 rounded-full"
        src={user.id !== currentUser.id ? currentUser.avatar : recieverAvatar}
        alt=""
      />
      <div className="relative">
        <p
          className={`p-5 text-sm ${
            user.id === currentUser.id
              ? ' bg-white rounded-income-msg'
              : ' bg-primary-green rounded-outcome-msg text-white'
          }`}
        >
          {text}
        </p>
        <span
          className={`absolute -bottom-5 flex items-center gap-1 text-xs text-secondary-grey ${
            user.id !== currentUser.id ? 'right-0' : ''
          }`}
        >
          {true && (
            <svg
              width="24"
              height="11"
              viewBox="0 0 24 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0259 2.03538L5.62593 10.2854C5.48565 10.4234 5.29676 10.5007 5.09999 10.5007C4.90322 10.5007 4.71433 10.4234 4.57405 10.2854L0.974052 6.75007C0.903816 6.681 0.847871 6.59878 0.809411 6.50809C0.770952 6.4174 0.750731 6.32002 0.749904 6.22152C0.749077 6.12302 0.76766 6.02532 0.804591 5.934C0.841522 5.84267 0.896079 5.75952 0.965146 5.68929C1.03421 5.61905 1.11644 5.5631 1.20713 5.52464C1.29781 5.48619 1.39519 5.46596 1.49369 5.46514C1.59219 5.46431 1.6899 5.48289 1.78122 5.51982C1.87254 5.55676 1.95569 5.61131 2.02593 5.68038L5.09999 8.69913L12.975 0.964755C13.117 0.825267 13.3085 0.747892 13.5076 0.74965C13.6061 0.75052 13.7035 0.770792 13.7942 0.809309C13.8849 0.847825 13.9672 0.903831 14.0362 0.974129C14.1053 1.04443 14.1599 1.12764 14.1968 1.21902C14.2337 1.3104 14.2522 1.40815 14.2513 1.5067C14.2505 1.60524 14.2302 1.70265 14.1917 1.79336C14.1532 1.88407 14.0972 1.96631 14.0269 2.03538H14.0259ZM23.0353 0.974129C22.9663 0.903778 22.884 0.847725 22.7933 0.809176C22.7026 0.770626 22.6052 0.750335 22.5066 0.749465C22.4081 0.748594 22.3103 0.76716 22.2189 0.804101C22.1275 0.841042 22.0443 0.895634 21.9741 0.964755L14.0991 8.69913L12.3337 6.96475C12.1918 6.82539 12.0002 6.74814 11.8013 6.74998C11.6024 6.75183 11.4123 6.83262 11.273 6.9746C11.1336 7.11657 11.0563 7.30809 11.0582 7.50703C11.06 7.70596 11.1408 7.89602 11.2828 8.03538L13.5731 10.2854C13.7134 10.4234 13.9023 10.5007 14.0991 10.5007C14.2958 10.5007 14.4847 10.4234 14.625 10.2854L23.025 2.03538C23.0954 1.9664 23.1515 1.88423 23.1902 1.79354C23.2288 1.70286 23.2492 1.60545 23.2501 1.50689C23.2511 1.40833 23.2326 1.31054 23.1957 1.21913C23.1589 1.12771 23.1044 1.04446 23.0353 0.974129Z"
                fill="#329993"
              />
            </svg>
          )}{' '}
          {created_at_formatted}
        </span>
      </div>
    </li>
  );
};

export default ChatMessage;
