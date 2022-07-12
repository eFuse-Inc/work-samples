import React from "react";

export function Comment({ post }) {
    console.log('comment', post.comments);
    console.log('stuff', Object.keys(post.comments));

  return (
    <div>
        <p>hello!</p>
    </div>
  );
}
