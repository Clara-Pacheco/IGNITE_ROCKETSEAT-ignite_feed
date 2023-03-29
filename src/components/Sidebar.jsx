import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className= {styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1635863762520-d952874f4d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' 
        />

      <div className={styles.profile}>
        <strong>Clara Pacheco</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}