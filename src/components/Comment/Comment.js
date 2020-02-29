import React from 'react';

function Comment({ data }) {
  return (
    <>
      <img src={data.author.avatar} className="avatar"></img>
      <span className="authorname">{data.author.name}</span>
      <p>{data.content}</p>
    </>
  )
}

export default Comment;