import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "../style/Post.module.css";
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {

  const [comments, setComments] = useState<string[]>([])

  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line =>{
          if (line.type == "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == "link"){
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea 
          name='comment' 
          placeholder="Escreva aqui seu comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length == 0}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.CommentList}>
        {comments.map(comment =>{
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  );
}
