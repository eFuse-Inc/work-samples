import React from "react";
import { Card } from "./Card.js";

export function Cards({ data }) {

  return (
  <>
          {data.map((oneUsersData) => {
            return (
               <Card key={oneUsersData.id} oneUsersData={oneUsersData} />
             );
      })}
            </>
  );
}
