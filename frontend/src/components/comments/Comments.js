import React from 'react';
import {Comment} from "./Comment";

export function Comments({ post }) {
  return (
      <div>
          
          {post.comments.map((comment) => {
             return (
                  <Comment key={comment.commentsId} comment={comment} />
               ); 
           })}
    </div>
  );
}

