import React, { useState } from "react";
import "./CommentBar.css";

export function CommentBar({setComment, post}) {
  // const { newComment, setNewComment } = useState('');
  const [ editing, setEditing ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const handleOnChangeComment = (e) => {
      let number = 0
      while (number < post.comment.comments.length) {
        number ++
    }
    const newComment = {
      commentId: number,
      date: new Date().toLocaleDateString(),
      comment: e.target.value,
    }
    setComment((prevState) => ({
      ...prevState, newComment
    }))
  };

  const handleEditingOnClick = () => {
    setEditing(true);
  };

  const handleSubmittingOnClick = () => {
    setSubmitted(true)
  };

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
