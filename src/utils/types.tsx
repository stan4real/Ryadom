//Allcats and favoritescats pages
export type Cat = {
    id:string,
    url:string,
    width:number,
    height:number,
    breeds:[],
    favourite:{}
}
export type CatSingle = {
    cat:Cat
}
export type CatData = Cat[]
export type favoriteState = {
    value:number
}

//PostPage
export interface Post {
    id: number,
    title:string,
    description:string,
    category:string,
    image:string
}
export type PostSingle = {
    post: Post
}

//Context
export type CatContext = string

