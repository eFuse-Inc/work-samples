import React from 'react';
import "./ReactionBar.css";

export function CommentReactions({ comment, onClickHype, hypedClass }) {
  return (
    <div className="reactionsBar">
      <button onClick={onClickHype} className="reactionsButton" type="submit">
        <span class={`${hypedClass} material-icons-outlined icon hypesIcon`}>
          water_drop
        </span>
        <p className="number">
          {comment.postHypeNo} <span className="words">Hypes</span>
        </p>
      </button>
      <button
        className="reactionsButton"
        type="submit"
      >
        <span class="material-icons-outlined icon commentsIcon">
          chat_bubble_outline
        </span>
        <p className="number">
          {comment.noOfComments}
          <span className="words"> Comment(s)</span>
        </p>
      </button>
      <button className="reactionsButton" type="submit">
        <span class="material-icons-outlined icon sharesIcon">share</span>
        <p className="number">
          {comment.postShareNo} <span className="words">Shares</span>
        </p>
      </button>
    </div>
  );
}
