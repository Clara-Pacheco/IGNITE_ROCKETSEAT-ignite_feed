import styles from './Comment.module.css'

// IMPORT ICONS LIBRARY PHOSPHOR

import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://avatars.githubusercontent.com/u/93992748?v=4'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Clara Pacheco</strong>
              <time title='11 de maio as 8:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}