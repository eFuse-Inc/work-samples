import React from 'react';
import { ReactionBar } from "../ReactionBar.js";
import { CommentBar } from "../CommentBar.js";
import "./Card.css";


export function Card({ oneUsersData }) {
  // const timeAgo = () => {
  //   const hoursAgo = onePost.date.getHours();
  //   console.log('hoursAgo', hoursAgo);
  //   const minsAgo = onePost.date.getMinutes();
  //   console.log('minsAgo', minsAgo);
  //   const secondsAgo = onePost.date.getSeconds();
  //   console.log('secondsAgo', secondsAgo);
  //   const dateTime = new Date();
  //   console.log(dateTime);

  //   if (dateTime.getTime() > onePost.date.getTime()) {
  //     if (dateTime.getHours() < hoursAgo) {
  //       return hoursAgo;
  //     }
  //     if (dateTime.getMinutes() < minsAgo) {
  //       return minsAgo;
  //     }
  //     if (dateTime.getSeconds() > secondsAgo) {
  //       return secondsAgo;
  //     }
  //   } else {
  //     return dateTime.getTime();
  //   }
  // }
  return (
    <div>
                  {oneUsersData.posts.map((post) => {
              return (
                <div className="largeCard">
                  <div className="tripleDot">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.875 20.5C21.875 19.4844 21.0156 18.625 20 18.625C18.9453 18.625 18.125 19.4844 18.125 20.5C18.125 21.5547 18.9453 22.375 20 22.375C21.0156 22.375 21.875 21.5547 21.875 20.5ZM26.5625 18.625C25.5078 18.625 24.6875 19.4844 24.6875 20.5C24.6875 21.5547 25.5078 22.375 26.5625 22.375C27.5781 22.375 28.4375 21.5547 28.4375 20.5C28.4375 19.4844 27.5781 18.625 26.5625 18.625ZM13.4375 18.625C12.3828 18.625 11.5625 19.4844 11.5625 20.5C11.5625 21.5547 12.3828 22.375 13.4375 22.375C14.4531 22.375 15.3125 21.5547 15.3125 20.5C15.3125 19.4844 14.4531 18.625 13.4375 18.625Z"
                        fill="#12151D"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </div>

                  <div className="invidualCard">
                    <div key={post.postId} className="topOfCard">
                      <img
                        className="imgBubble"
                        src={oneUsersData.picURL}
                        alt="user"
                      />
                      <div className="headings">
                        <p className="user">{oneUsersData.username}</p>
                        <p className="date">{post.postDate}</p>
                      </div>
                    </div>
                    <div className="post">
                      <p>{post.post}</p>
                      <ReactionBar post={post} />
                      <CommentBar />
                    </div>
                  </div>
                </div>
              );
            })}
    </div>
  );
}
