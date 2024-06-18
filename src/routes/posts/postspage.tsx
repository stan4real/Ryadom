import styles from './postspage.module.css'
import { Post } from "../../utils/types";
import PostItem from "./postItem/PostItem";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import PostService from '../../service/post-service'
import PreviewPost from "../../components/layout/previewPostpage/previewPost";


const PostData = [{
    id:1,
    title:'Jiza asdqwqd qwdqd',
    description:'Оказываем помощь бездомным и домашним животным, пристраиваем кошек и собак в семьи, ведем просветительскую работу среди людей по содержанию и ответственному отношению к животным. Дашним животным, пристраиваем кошек и собак в семьи, ведем просветительскую работу среди людей по содержанию и ответственному отношению к животным.',
    category:'cat',
    image:'/тойтерьер.png'
},{
    id:2,
    title:'Viva la Cata',
    description:'Kotyata rodilis bez bolezney v seme sapog ',
    category:'dog',
    image:'/котятспятjpg.jpg'
}] as Post[]


export default function Posts() {
    const {data} = useQuery({ 
        queryKey: ['allcats'], 
        queryFn: ()=> PostService.getPosts(),
        select:({data}) => data,
        staleTime:5*60*1000,
      })
      console.log(data)
    return (
    <div className={styles.container}>
        <PreviewPost/>
        <div className={styles.postItemContainer}>
            {PostData.map(item => 
            <Link  className={styles.link} key={item.id} to={`/posts/${item.id}`}>
                <PostItem  post={item}/>
            </Link>
            )}
        </div>
    </div>
    
  )
}
