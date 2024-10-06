/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../style/Comment.module.css";
import { Avatar } from "./Avatar.jsx"

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar  hasBorder={false} src="https://i.ytimg.com/vi/XI-1kGX4ung/maxresdefault.jpg"/>
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Marinhoba</strong>
                    <time dateTime="01/10/2024 ás 18:09">há 1h</time>
                </div>
                <button title="Deletar Comentario">
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
