import { CatSingle } from '../../utils/types'
import Favorites from './Favorites'

const CatItem = ({cat}:CatSingle) => {
  return (
    <div key={cat.id} className='cat'>
            <div  className='cat-image' style={{backgroundImage:`url(${cat.url})`}}/>
            <Favorites cat={cat}/>
          </div>
  )
}

export default CatItem