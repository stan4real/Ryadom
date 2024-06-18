import styles from './previewPost.module.css'

const PreviewPost = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <h1>
            Знание = Сила
            </h1>
            <h3>
            Читайте статьи и узнавайте новое о жизни сообщества
            </h3>
        </div>
        <div className={styles.dog}>
        </div>
    </div>
  )
}

export default PreviewPost