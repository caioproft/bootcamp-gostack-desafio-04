import React from 'react';
import './styles.css';
import Comment from '../Comment/Comment';

function Post({ data }) {
  const { comments } = data;

  return (
    <div className="postContainer">

      <div className="content">
        <img src={data.author.avatar} id="authorAvatar" />
        <div className="postInfo">
          <span id="authorName">{data.author.name}</span>
          <span id="postDate">
            {data.date}
          </span>
        </div>
      </div>
      <p>
        {data.content}
      </p>
      <hr />

      {comments.map(comment => <Comment key={comment.id} data={comment} />)}

    </div>
  )
}

export default Post;