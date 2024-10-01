import { Header } from './components/Header';
import { Post } from './components/Post'

// Style
import './style/style.css'
export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="User"
        content="Text Text Text"
      />
      <Post 
        author="User2"
        content="Texta Texta Texat"
      />
    </div>
  );
}


