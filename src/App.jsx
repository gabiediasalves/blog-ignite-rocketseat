import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabiediasalves.png',
      name: 'Gabrieli Alves',
      role: 'Developer'
    },
    content: [
    {type:'paragraph', content:'Fala galeraa 👋'},
    {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type:'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-01-02 20:00:01')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GabrielDiasAlves.png',
      name: 'Gabriel Alves',
      role: 'King of Manager'
    },
    content: [
    {type:'paragraph', content:'Fala galeraa 👋'},
    {type:'paragraph', content:'Rei do Manager 🚀'},
    {type:'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2024-01-02 20:00:01')
  }
]

function App() {


  return (
   <div>
    <Header/>

    <div className={styles.wrapper}>
        <Sidebar/>
      <main>
        {posts.map(post => {
          return (
          <Post
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
          />
          )
        })}
        
      </main>
    </div>
   </div>
  )
}

export default App
