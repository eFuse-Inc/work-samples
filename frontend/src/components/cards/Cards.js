import React from "react";
import { Card } from "./Card.js";

export function Cards({ setData, data }) {
  return (
  <>
          {data.users.map((oneUsersData) => {
            return (
               <Card key={oneUsersData.id} setData={setData} oneUsersData={oneUsersData} />
             );
      })}
            </>
  );
}
