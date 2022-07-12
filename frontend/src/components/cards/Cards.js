import React from "react";
import { Card } from "./Card.js";

export function Cards({ setData, data }) {

  return (
    <>
      {/* mapping through data on localStorage to show an individual's data */}
          {data.users.map((oneUsersData) => {
            return (
              //passing the key for prop of '.map', passing setData to update state on certain components, passing the individuals data to render to page.
               <Card key={oneUsersData.id} setData={setData} oneUsersData={oneUsersData} />
             );
      })}
            </>
  );
}
