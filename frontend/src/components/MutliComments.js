import React from 'react';
import {Comment} from "./Comment";

export function MutliComments({ post }) {
    console.log("post on MutliComments", post);
  return (
      <div>
          {/* at post, there are comments on a post,  */}
    <Comment post={post} />
    </div>
  );
}

