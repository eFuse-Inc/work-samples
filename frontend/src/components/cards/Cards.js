import React from "react";
import { Card } from "./Card.js";

export function Cards({ setData, data }) {
  console.log('data in cards', data);
  return (
    <>
      {/* mapping through data on localStorage to show an individual's data */}
          {data.posts.map((post) => {
            return (
              //passing the key for prop of '.map', passing setData to update state on certain components, passing the individuals data to render to page.
               <Card key={post.postId} setData={setData} data={data} post={post} />
             );
      })}
            </>
  );
}
