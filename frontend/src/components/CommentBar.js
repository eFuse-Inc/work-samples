import React, { useState } from "react";
import "./CommentBar.css";

export function CommentBar() {
  const { newComment, setNewComment } = useState('');
  const { editing, setEditing } = useState(false);
  const { submitted, setSubmitted } = useState(false);

  const handleOnChangeComment = (e) => {
    return setNewComment(e.target.value);
  };

  const handleEditingOnClick = () => {
    setEditing(true);
  };

  const handleSubmittingOnClick = () => {
    setSubmitted(true)
  };

  console.log("editing", editing);

  return (
    <div className="commentBar">
      <form>
        <input
          type="text"
          className="inputComment"
          onChange={handleOnChangeComment}
        />
        <button className="comment" onClick={handleEditingOnClick}>
          <span class="material-symbols-outlined">chat_bubble</span>
          <span> Add comment </span>
          <button
            className="plus"
            type="submit"
            onClick={handleSubmittingOnClick}
          >
            <span class="material-symbols-outlined">add_circle</span>{" "}
          </button>
        </button>
      </form>
    </div>
  );
}
