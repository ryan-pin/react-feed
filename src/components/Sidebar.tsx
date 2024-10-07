import styles from "../style/Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1632066216006-ef9d73dbea50?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://i.ytimg.com/vi/Hfv995ts_gg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLOZ5Vpf7TjCLHlk1Xw34eQC6b2Q"/>
                
                <strong>Mefius</strong>
                <span>Web Dev</span>
            </div>

            <footer>
                <a href="#">Editar perfil</a>
            </footer>
        </aside>
    )
}