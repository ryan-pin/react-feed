import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./style/App.module.css";

// Style
import "./style/style.css";

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://i.pinimg.com/originals/81/c9/31/81c9314e97404de54b7e500716750873.jpg",
      name: "Ryan",
      role: "Web Dev"
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor ipsum, porttitor at dapibus sit amet, tempor nec erat. Praesent vitae felis sed nibh tristique dictum. Vestibulum consectetur commodo lacus in venenatis. Fusce id dui in nibh cursus iaculis. Curabitur gravida accumsan ante eu malesuada. Integer consequat lacus quis orci viverra tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur commodo mi eget dolor varius, a vehicula odio lacinia. Sed at vehicula elit.'},
      { type: 'link', content: '#react'}
    ],
    publishedAt: new Date('2024-10-03 17:30:10'),
  },
  {
    id:2,
    author: {
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvz9uWiXMxW3FyybPLbDkQDFdAG56xyPobDA&s",
      name: "Merin",
      role: "Social Scientist"
    },
    content: [
      { type: 'paragraph', content: 'A leitura tem o poder de nos transportar para universos desconhecidos e nos apresentar novas perspectivas. Cada livro é uma aventura esperando para ser explorada. Qual foi a história que mais te marcou recentemente? 📖✨'},
      { type: 'link', content: 'merin.social.science/'},
      { type: 'link', content: '#AmoLer #DescobertasLiterárias #Inspiração'}

    ],
    publishedAt: new Date('2024-10-02 21:25:10'),
  },
   {
    id:3,
    author: {
      avatarUrl: "https://i.ytimg.com/vi/Hfv995ts_gg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLOZ5Vpf7TjCLHlk1Xw34eQC6b2Q",
      name: "Mefius",
      role: "Mobile Dev"
    },
    content: [
      { type: 'paragraph', content: 'Cada linha de código que escrevo é uma nova oportunidade de aprender e evoluir. Programação não é apenas resolver problemas, é transformar ideias em soluções práticas e criativas. 🚀💻'},
      { type: 'link', content: '#DevLife #Inovação #TechMindset'}
    ],
    publishedAt: new Date('2024-10-01 20:24:10'),
  },

]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
