import styles from "../style/Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://i.ytimg.com/vi/Hfv995ts_gg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLOZ5Vpf7TjCLHlk1Xw34eQC6b2Q" />
          <div className={styles.authorInfo}>
            <strong>Mefius</strong>
            <span>Flutter dev</span>
          </div>
        </div>

        <time dateTime="01/10/2024 ás 18:09">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dapibus fringilla odio, eget volutpat velit gravida quis. Aenean sed
          porta nibh. Maecenas suscipit augue sed justo tincidunt, eget
          efficitur mi pellentesque. Phasellus ut enim euismod, varius nisl eu,
          viverra lacus. Nulla at dignissim arcu, at semper leo. Integer luctus
          sed quam id eleifend. Nulla eu turpis vestibulum, vulputate magna
          quis, porta justo.
        </p>
        <p>
          <a href="#"> #Flutter</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>
        <textarea placeholder="Escreva aqui seu comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.CommentList}>
        <Comment />
      </div>
    </article>
  );
}
