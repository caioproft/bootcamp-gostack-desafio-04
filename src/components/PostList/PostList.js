import React, { Component } from 'react';
import Post from '../Post/Post';
import '../PostList/styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://ap.imagensbrasil.org/images/2020/02/28/julio.th.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguem sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://ap.imagensbrasil.org/images/2020/02/29/diegoo.th.jpg"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real!)."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://ap.imagensbrasil.org/images/2020/02/28/gabriel.th.png"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "https://ap.imagensbrasil.org/images/2020/02/28/clara.th.png"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "https://ap.imagensbrasil.org/images/2020/02/29/cezar.th.png"
            },
            content: "Que maaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts.map(post => < Post key={post.id} data={post} />)}
      </div>
    )
  }
}
export default PostList;