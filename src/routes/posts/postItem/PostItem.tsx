import styles from './PostItem.module.css'
import { PostSingle } from "../../../utils/types";

export default function PostItem({post}: PostSingle) {
  return (
    <div className={styles.postItem}>
      <div className={styles.image} style={{backgroundImage:`url(${post.image})`}}>
      </div>
      <div className={styles.text}>
        <h1>
          {post.title}
        </h1>
          <p>
            {post.description}
          </p>
      </div>
    </div>
  )
}
