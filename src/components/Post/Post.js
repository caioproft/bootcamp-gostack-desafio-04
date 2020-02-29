import React from 'react';
import './styles.css';
import Comment from '../Comment/Comment';

function Post({ data }) {
  const { comments } = data;

  return (
    <div className="postContainer">
      <img src={data.author.avatar} className="avatar" />

      <div className="post">
        <span id="authorname">{data.author.name}</span>
        <span id="postDate">
          {data.date}
        </span>
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