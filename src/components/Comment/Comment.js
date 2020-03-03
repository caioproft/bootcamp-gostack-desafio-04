import React from 'react';
import './styles.css'

function Comment({ data }) {
  return (
    <div className="commentContainer">
      <img src={data.author.avatar} id="authorCommentAvatar"></img>
      <div className="comment">
        <p>
          <strong>
            {data.author.name}
          </strong>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default Comment;