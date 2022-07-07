import React from 'react';
import "./ReactionBar.css";


export function ReactionBar({ oneUsersData }) {
  return (
    <>
      <div className="reactionsBar">
        <svg
          className="icon"
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 0C2.46875 3.1875 0 6.90625 0 9.40625C0 13.3125 2.4375 16 6 16C9.53125 16 12 13.3125 12 9.40625C12 6.90625 9.46875 3.15625 6 0ZM6 14.5C3.28125 14.5 1.5 12.4688 1.5 9.40625C1.5 7.96875 2.90625 5.125 5.96875 2.09375C8.6875 4.75 10.5 7.65625 10.5 9.40625C10.5 12.4688 8.6875 14.5 6 14.5ZM7.40625 7.5C6.78125 6.96875 6.1875 6.46875 6.1875 5.6875C6.1875 5.59375 6.09375 5.53125 6.0625 5.53125C6 5.5 5.875 5.5 5.8125 5.59375C4.09375 7.9375 6.75 7.75 6.75 9.4375C6.75 10.1875 6.15625 10.75 5.4375 10.75C4.6875 10.75 4.125 10.1875 4.125 9.4375V8.5C4.09375 8.40625 4.03125 8.34375 3.9375 8.34375C3.875 8.34375 3.8125 8.34375 3.78125 8.375C3.59375 8.5625 3 9.21875 3 10.25C3 11.7812 4.34375 13 6 13C7.625 13 9 11.7812 9 10.25C9 8.875 8.1875 8.1875 7.40625 7.5Z"
            fill="#12151D"
            fillOpacity="0.6"
          />
        </svg>
        <p>{oneUsersData.posts.postHypeNo} Hypes</p>
        <svg
          className="icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0H2C0.875 0 0 0.90625 0 2V11C0 12.125 0.875 13 2 13H5V15.625C5 15.875 5.15625 16 5.375 16C5.4375 16 5.5 16 5.59375 15.9375L9.5 13H14C15.0938 13 16 12.125 16 11V2C16 0.90625 15.0938 0 14 0ZM14.5 11C14.5 11.2812 14.25 11.5 14 11.5H9L8.59375 11.8125L6.5 13.375V11.5H2C1.71875 11.5 1.5 11.2812 1.5 11V2C1.5 1.75 1.71875 1.5 2 1.5H14C14.25 1.5 14.5 1.75 14.5 2V11Z"
            fill="#12151D"
            fillOpacity="0.6"
          />
        </svg>
        <p>{oneUsersData.posts.comments.comment}</p>
        <svg
          className="icon"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 10C10.1875 10 9.46875 10.3125 8.90625 10.8438L5.84375 8.90625C6.03125 8.34375 6.03125 7.6875 5.84375 7.125L8.90625 5.1875C9.46875 5.6875 10.1875 6 11 6C12.6562 6 14 4.65625 14 3C14 1.34375 12.6562 0 11 0C9.34375 0 8 1.34375 8 3C8 3.3125 8.03125 3.625 8.125 3.90625L5.0625 5.84375C4.5 5.3125 3.78125 5 3 5C1.34375 5 0 6.34375 0 8C0 9.65625 1.34375 11 3 11C3.78125 11 4.5 10.6875 5.0625 10.1875L8.125 12.125C8.03125 12.4062 8 12.7188 8 13C8 14.6562 9.34375 16 11 16C12.6562 16 14 14.6562 14 13C14 11.3438 12.6562 10 11 10ZM11 1.5C11.8125 1.5 12.5 2.1875 12.5 3C12.5 3.84375 11.8125 4.5 11 4.5C10.1562 4.5 9.5 3.84375 9.5 3C9.5 2.1875 10.1562 1.5 11 1.5ZM3 9.5C2.15625 9.5 1.5 8.84375 1.5 8C1.5 7.1875 2.15625 6.5 3 6.5C3.8125 6.5 4.5 7.1875 4.5 8C4.5 8.84375 3.8125 9.5 3 9.5ZM11 14.5C10.1562 14.5 9.5 13.8438 9.5 13C9.5 12.1875 10.1562 11.5 11 11.5C11.8125 11.5 12.5 12.1875 12.5 13C12.5 13.8438 11.8125 14.5 11 14.5Z"
            fill="#12151D"
            fillOpacity="0.6"
          />
        </svg>{" "}
        <p>{oneUsersData.posts.postShareNo} Shares</p>
        <p>{oneUsersData.posts.views} views</p>
      </div>
    </>
  );
}