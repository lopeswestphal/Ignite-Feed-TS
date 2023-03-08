import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styless from './App.module.css';

//Evitar que o html retorne do back-end: mais forte contra invasores 
const posts: PostType[] = [
  {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/lopeswestphal.png',
        name: 'Matheus Lopes',
        role: 'Developer'  
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},    
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-03-06 20:00:00'),
  },
  {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/professorguanabara.png',
        name: 'Junior',
        role: 'Analista de dados'  
      },
      content: [
          {type: 'paragraph', content: 'Fala galeraa 👋'},
          {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},    
          {type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-03-02 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styless.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
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


