import './favorites.css'
import { useAppSelector } from '../../app/hooks'
import '../allcats/App.css'

function Favorites() {
  const state = useAppSelector(state => state.favorite)
  return (
    <>
      {state?.length ? 
      <div className='container'>
        {state.map(cat =>
          <div key={cat.id} className='cat'>
            <div  className='cat-image' style={{backgroundImage:`url(${cat.url})`}}/>
          </div>
          )}
      </div>
      :<h1>Вы еще не выбрали свох любимых котиков :(</h1>}
    </>
  )
}

export default Favorites