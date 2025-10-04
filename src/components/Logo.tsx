import React from 'react';
export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="grid-icon">
        <path
          d="M9.75 6.75H6.75V9.75H9.75V6.75Z"
          fill="currentColor"
          className="opacity-50"
        />
        <path
          d="M17.25 6.75H14.25V9.75H17.25V6.75Z"
          fill="currentColor"
        />
        <path
          d="M9.75 14.25H6.75V17.25H9.75V14.25Z"
          fill="currentColor"
        />
        <path
          d="M14.25 9.75V6.75H11.25V12.75H17.25V9.75H14.25Z"
          fill="currentColor"
          className="opacity-75"
        />
      </g>
    </svg>
  );
};