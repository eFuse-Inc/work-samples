import React from 'react';
import {Comment} from "./Comment";

export function MutliComments({ post, oneUsersData }) {
  return (
      <div>
          
          {post.comments.map((comment) => {
             return (
                  <Comment key={comment.id} comment={comment} />
               ); 
           })}
    </div>
  );
}

