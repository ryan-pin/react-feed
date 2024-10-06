/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../style/Comment.module.css";
import { Avatar } from "./Avatar.jsx"

export function Comment({content, onDeleteComment}) {

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
            <button>
                <ThumbsUp />Curtir <span>15</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
