import axios from "axios"
import { Post } from "../utils/types"

class PostService {
    private URL = 'http://localhost:5000/api'
    async getPosts(){
        const posts = axios.get<Post[]>(`${this.URL}/post`)
        return  posts
    }
}
export default new PostService