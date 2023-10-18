//componentes
import { Header } from './components/Header'
import {Post} from './components/Post'
import {Sidebar} from './components/Sidebar'

// styles
import styles from './App.module.scss'
import './global.css'

const posts = [{
  id: 1,
  author:{
    avatarUrl: 'https://avatars.githubusercontent.com/u/97102584?s=400&u=b2f103a113bb816c1f599f9874749736c4b7a121&v=4',
    name: 'Lucivânia Ventura',
    role: 'Front-end Developer'
  },
  content: [
   {type: 'paragraph', content: 'Hello guys!', },
   {type: 'paragraph', content: 'I am Lucivânia Ventura :)',},
   {type: 'paragraph', content: 'Studying System Analysis and Development.',},
   {type: 'paragraph', content: 'I am learning React.Js + Vite through the course of RocketSeat.',},
   {type: 'paragraph', content: 'This experience is providing me more knowledge about React.js, which is a really valueable library for developers. The components part makes it easy to develop new projects.',},
   {type: 'paragraph', content: 'View more👇🏼', },
   {type: 'link', content: 'https://github.com/lucivania-ventura',},
  ],
  publishedAt: new Date('2023-10-18 12:35:00'),
},
 {
   id: 2,
   author:{
     avatarUrl: 'https://media.istockphoto.com/id/1335403929/pt/vetorial/funny-cartoon-illustration-of-a-walking-banana-in-retro-style.jpg?s=612x612&w=0&k=20&c=HyUwJQEhikBWF3ZRtSl-PysiBdLY5vRMje5OqAVoFx8=',
     name: 'Bamana Moneira',
     role: 'Banana specialist 👨🏻‍🍳'
   },
   content: [
    {type: 'paragraph', content: 'Hi!', },
    {type: 'paragraph', content: 'I love to eat Bananas 🍌🍌🍌🍌',},
    {type: 'paragraph', content: 'My life is Banana, I live on Banana, I work making Banana food, my specialty.',},
    {type: 'link', content: '#bananaIsLife',},
   ],
   publishedAt: new Date('2023-10-02 12:35:00'),
 },
 {
  id: 3,
  author:{
    avatarUrl: 'https://pethaus.com.au/cdn/shop/products/dog-clothing-gangsta-yapper-dog-hoodie-customised-2_2000x.jpeg?v=1614668756',
    name: 'Dog Ostentação',
    role: 'Herdeiro do grupo Dogs S.A'
  },
  content: [
   {type: 'paragraph', content: 'Uga Buga!', },
   {type: 'paragraph', content: 'Hahaha Sou herdeiro mané!',},
   {type: 'paragraph', content: 'Não basta ser herdeiro, é necessário fazer valer o money💲💲💲',},
  ],
  publishedAt: new Date('2023-10-10 12:35:00'),
}
];

export function App() {
 return (
    <div>
     <Header/>
      <div className={styles.wrapper}>

          <Sidebar />
        <main>
          {posts.map((post) => {
            return (
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
 )
}

