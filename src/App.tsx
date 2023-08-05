import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

interface Post {

}

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Vinivgm.png',
      name: 'Vinicius Medeiros',
      role: 'Dev Frontend',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},                
    ],
    publishedAt: new Date('2023-08-02 20:20:20')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/wagnergeizon.png',
      name: 'Wagner Geizon',
      role: 'Dev @FullStack',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},                
    ],
    publishedAt: new Date('2023-08-01 20:20:20')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return  (
            <Post 
              key={post.id}
              post={post}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}

