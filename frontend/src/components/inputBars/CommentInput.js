import React, { useState } from "react";
import "./CommentInput.css";

export function CommentInput({ setData, setViewingComments, post }) {
  const [editing, setEditing] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleOnChangeComment = (e) => {
    setNewComment(e.target.value);
  };
  // console.log("before", post);

  const handleNewComment = (e) => {
    e.preventDefault();
    const idNumber = post.comments.length + 1;

    const formattedComment = {
      commentId: idNumber,
      date: new Date().toLocaleDateString(),
      comment: newComment,
    };
    setData({
      ...post,
      comments: [formattedComment, ...post.comments],
    });
    localStorage.setItem(
      "users",
      JSON.stringify({
        ...post,
        comments: [formattedComment, ...post.comments],
      })
    );
    if (post.comments.length > 0) {
      setViewingComments(true);
    }
    setEditing(true);
    setNewComment("");
  };
  // console.log("after", post);

  return (
    <div className="commentBar">
      <form onSubmit={handleNewComment}>
        <span class="material-icons-outlined">chat_bubble_outline</span>
        <input
          type="text"
          className="inputComment"
          onChange={handleOnChangeComment}
          placeholder="Add comment"
        />
        <button type="submit" class="material-icons-outlined">
          add_circle_outline
        </button>
      </form>
    </div>
  );
}
