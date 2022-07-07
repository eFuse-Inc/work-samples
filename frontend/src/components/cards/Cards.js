import React from "react";
import { Card } from "./Card.js";

export function Cards({ postData }) {

  return (
  <>
          {postData.map((onePost) => {
            return (
               <Card key={onePost.postId} onePost={onePost} />
             );
      })}
            </>
  );
}
