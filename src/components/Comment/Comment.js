import React from 'react';
import './styles.css'

function Comment({ data }) {
  return (
    <div className="commentContainer">
      <img src={data.author.avatar} className="avatar"></img>
      <div className="comment">
        <span className="authorname">{data.author.name}</span>
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default Comment;