import React, { useState } from "react";
import "./CommentBar.css";

export function CommentBar({setData, post}) {
  const [ editing, setEditing ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);

  const handleOnChangeComment = (e) => {
      let number = 0
      while (number < post.comments.comment.length) {
        number ++
    }
    const newComment = {
      commentId: number,
      date: new Date().toLocaleDateString(),
      comment: e.target.value,
    }
    setData((prevState) => ({
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
          // placeHolder="Add comment"
        />
      </form>
    </div>
  );
}
