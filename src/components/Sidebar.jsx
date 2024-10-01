import styles from "../style/Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1632066216006-ef9d73dbea50?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://i.redd.it/c5aj56af8hhc1.jpeg" />
                
                <strong>Mefius</strong>
                <span>Flutter dev</span>
            </div>

            <footer>
                <a href="#">Editar perfil</a>
            </footer>
        </aside>
    )
}