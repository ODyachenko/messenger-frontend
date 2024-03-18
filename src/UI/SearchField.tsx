import React, { FC } from 'react';

type SearchFieldProps = {
  className?: string;
};

const SearchField: FC<SearchFieldProps> = ({ className }) => {
  return (
    <label
      className={`relative block border border-solid border-primary-grey rounded-3xl py-3 pl-14 pr-3 cursor-pointer ${className}`}
    >
      <svg
        className="absolute left-5"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5306 18.4694L14.8365 13.7763C16.1971 12.1429 16.8755 10.0478 16.7307 7.92697C16.5859 5.8061 15.629 3.82271 14.0591 2.38938C12.4892 0.95605 10.4271 0.183144 8.30188 0.231444C6.17663 0.279744 4.15181 1.14553 2.64864 2.6487C1.14547 4.15187 0.279683 6.17669 0.231383 8.30194C0.183083 10.4272 0.955989 12.4893 2.38932 14.0592C3.82265 15.6291 5.80604 16.586 7.92691 16.7308C10.0478 16.8756 12.1428 16.1971 13.7762 14.8366L18.4693 19.5307C18.539 19.6003 18.6218 19.6556 18.7128 19.6933C18.8038 19.731 18.9014 19.7504 19 19.7504C19.0985 19.7504 19.1961 19.731 19.2871 19.6933C19.3782 19.6556 19.4609 19.6003 19.5306 19.5307C19.6003 19.461 19.6556 19.3782 19.6933 19.2872C19.731 19.1962 19.7504 19.0986 19.7504 19C19.7504 18.9015 19.731 18.8039 19.6933 18.7129C19.6556 18.6218 19.6003 18.5391 19.5306 18.4694ZM1.74997 8.50003C1.74997 7.16501 2.14585 5.85996 2.88755 4.74993C3.62925 3.6399 4.68345 2.77474 5.91686 2.26384C7.15026 1.75295 8.50746 1.61928 9.81683 1.87973C11.1262 2.14018 12.3289 2.78306 13.2729 3.72706C14.2169 4.67106 14.8598 5.8738 15.1203 7.18317C15.3807 8.49254 15.247 9.84974 14.7362 11.0831C14.2253 12.3165 13.3601 13.3708 12.2501 14.1125C11.14 14.8541 9.83499 15.25 8.49997 15.25C6.71037 15.248 4.99463 14.5362 3.72919 13.2708C2.46375 12.0054 1.75195 10.2896 1.74997 8.50003Z"
          fill="#758A88"
        />
      </svg>
      <input
        className="block w-full"
        type="search"
        placeholder="Search for chats..."
      />
    </label>
  );
};

export default SearchField;
