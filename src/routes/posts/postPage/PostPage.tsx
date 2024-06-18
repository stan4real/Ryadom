import { useParams } from "react-router-dom"

const PostPage = () => {
    const params = useParams()
  return (
    <h1>PostPage В разработке {params.postId}</h1>
  )
}

export default PostPage