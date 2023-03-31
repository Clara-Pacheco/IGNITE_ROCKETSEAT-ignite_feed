import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/index.js'

import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

// Post data structure:
// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String 


export function Post({author,content,publishedAt}) {

  // Variável que será atribuída ao parâmetro title da tag <time>
  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  // Variável que irá no conteúdo da tag <time> - essa variável irá
  // armazenar a data de publicação do post relativa ao agora, relativa
  // a data atual -  para isso, iremos usar uma outra função do
  // date-fns que é o formatDistanceToNow;

  // formatDistanceToNow recebe uma data, e essa data será comparada,
  // com a data atual

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src= {author.avatarURL} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
         title={publishedDateFormatted}
         dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header> 

      <div className={styles.content}>
       {content.map(line=>{
        if(line.type === 'paragraph'){
          return <p>{line.content}</p>
        }else if (line.type === 'link'){
          return <p><a href='#'>{line.content}</a></p>
        }
       })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder='Deixe um comentário'/>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}