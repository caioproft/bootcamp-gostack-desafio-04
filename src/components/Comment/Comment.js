import React from 'react';
import './styles.css'

function Comment({ data }) {
  return (
    <div className="commentContainer">
      <img src={data.author.avatar} id="avatar"></img>
      <div className="comment">
        <p><span>{data.author.name}</span>{data.content}</p>
      </div>
    </div>
  )
}

export default Comment;