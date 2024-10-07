import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../style/Comment.module.css";
import { Avatar } from "./Avatar.js"
import { useState } from "react";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;

}

export function Comment({content, onDeleteComment}: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment(){
    onDeleteComment(content)

  }

  return (
    <div className={styles.comment}>
      <Avatar  hasBorder={false} src="https://i.ytimg.com/vi/Hfv995ts_gg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLOZ5Vpf7TjCLHlk1Xw34eQC6b2Q"/>
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Mefius</strong>
                    <time dateTime="01/10/2024 ás 18:09">há 1h</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar Comentario">
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />Curtir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
