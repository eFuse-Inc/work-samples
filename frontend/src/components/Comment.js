import React from "react";

export function Comment({ comment }) {
    console.log(comment);

    return (
    <div className="commentCard">
        <div className="topOfComment">
            <div className="topOfCard">
            <img className="commentImg" src={comment.picURL} alt="user" />
            <div className="headings">
                <p className="user">{comment.username}</p>
                <p className="date">{comment.date}</p>
                    </div>
                 <div className="post">
                        <p>{comment.comment}</p>
                 </div>
        </div>
         </div>
    </div>
  );
}
