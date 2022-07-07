import React, { useState } from "react";
import "./InputCard.css";

export function InputCard() {
  const { media, setMedia } = useState();
  const { gettingMedia, setGettingMedia } = useState(false);
  const { newPost, setNewPost } = useState()


  return (
    <div className="inputCard">
      <form className="form">
        <input
          type="text"
          name="inputStatus"
          className="inputStatus"
          placeholder=" What's on your mind?"
        />
        <div className="iconSpacing">
          { !gettingMedia ? (
            <>
              <svg
                className="icon"
                width="14"
                height="16"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.35156 3.6875H12.6875V11.5625H1.3125V3.6875H4.62109L5.27734 1.9375H8.69531L9.35156 3.6875ZM8.85938 0.625H5.27734C4.73047 0.625 4.23828 0.980469 4.04688 1.5L3.71875 2.375H1.3125C0.574219 2.375 0 2.97656 0 3.6875V11.5625C0 12.3008 0.574219 12.875 1.3125 12.875H12.6875C13.3984 12.875 14 12.3008 14 11.5625V3.6875C14 2.97656 13.3984 2.375 12.6875 2.375H10.2812L9.87109 1.33594C9.70703 0.925781 9.32422 0.625 8.85938 0.625ZM7 10.9062C8.80469 10.9062 10.2812 9.45703 10.2812 7.625C10.2812 5.82031 8.80469 4.34375 7 4.34375C5.16797 4.34375 3.71875 5.82031 3.71875 7.625C3.71875 9.45703 5.16797 10.9062 7 10.9062ZM7 5.65625C8.06641 5.65625 8.96875 6.55859 8.96875 7.625C8.96875 8.71875 8.06641 9.59375 7 9.59375C5.90625 9.59375 5.03125 8.71875 5.03125 7.625C5.03125 6.55859 5.90625 5.65625 7 5.65625Z"
                  fill="#12151D"
                  fillOpacity="0.6"
                />
              </svg>
              <button
                onClick={() => {
                  setGettingMedia(!gettingMedia);
                }}
                className="iconText"
              >
                Add Media
              </button> </>) : (
            <input type="file"
              name="uploadFile"
              onChange={(e) => {
                setMedia(e.target.files);
              }} />
          )}


          <svg
            className="icon"
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8477 1.375C14.6836 1.375 14.5195 1.42969 14.3555 1.53906L11.375 3.42578V1.8125C11.375 1.10156 10.7188 0.5 9.95312 0.5H1.39453C0.628906 0.5 0 1.10156 0 1.8125V9.71484C0 10.4258 0.628906 11 1.39453 11H9.95312C10.7188 11 11.375 10.4258 11.375 9.71484V8.10156L14.3555 9.98828C14.5195 10.0977 14.6836 10.125 14.8477 10.125C15.3125 10.125 15.75 9.76953 15.75 9.27734V2.25C15.75 1.73047 15.3125 1.375 14.8477 1.375ZM10.0625 4.21875V9.66016C10.0352 9.6875 10.0078 9.6875 9.95312 9.6875H1.39453C1.33984 9.6875 1.3125 9.6875 1.3125 9.66016V1.86719C1.3125 1.83984 1.33984 1.8125 1.39453 1.8125H9.95312C10.0078 1.8125 10.0352 1.83984 10.0625 1.86719V4.21875ZM14.4375 8.48438L11.375 6.57031V4.95703L14.4375 3.04297V8.48438Z"
              fill="#12151D"
              fillOpacity="0.6"
            />
          </svg>
          <button className="iconText">Go Live</button>

          <button type="submit" formmethod="post" name="submitPost" value="Post" className="postButton">Post</button>
        </div>
      </form>
    </div>
  );
}
