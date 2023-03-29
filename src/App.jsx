import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Import CSS GLOBAL
import './global.css'

// IMPORT APP MODULE CSS
import styles from './App.module.css'


function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
       <Sidebar />

        <main>
            <Post 
            author='Clara Pacheco' 
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
          />

          <Post
            author='Emma' 
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
          />

          <Post
            author='Paulo' 
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, nam sit. Blanditiis neque nesciunt enim, quod at praesentium. Cupiditate, laudantium facilis voluptatem porro beatae iure. Nisi repudiandae provident quidem debitis?'
          />
        </main>


      </div>
     
      
    </div>
  )
}

export default App

