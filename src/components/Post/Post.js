import React from 'react';
import './styles.css';
import Comment from '../Comment/Comment';

function Post({ data }) {
  const { comments } = data;

  return (
    <div className="postContainer">
      <img src={data.author.avatar} className="avatar" />
      <div className="post">
        <span className="authorname">{data.author.name}</span>
        <span className="postDate">
          {data.date}
        </span>
      </div>
      <p>
        {data.content}
      </p>
      {comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  )
}

export default Post;