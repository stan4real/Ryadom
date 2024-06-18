import './App.css'
import CatService from '../../service/api'
import { useQuery } from '@tanstack/react-query'
import CatItem from './CatItem'

function App() {


  const {isLoading, error, data} = useQuery({ 
    queryKey: ['allcats'], 
    queryFn: ()=> CatService.getAll(),
    select:({data}) => data,
    staleTime:5*60*1000,
  })

    

  return (
    <>
    <div className='container'>
    {isLoading ? 
      <div>Loading. . . </div> 
      : error ? <h1>{error.message}</h1> 
      :data?.length ? (
        data.map(cat => 
          <CatItem key={cat.id} cat={cat} />
          )
          ) :
      <h1>
        Нет отвта от базы данных
      </h1>
      }
      </div>
    </>
  )
}

export default App
