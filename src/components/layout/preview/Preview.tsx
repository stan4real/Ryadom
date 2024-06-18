import { Heart } from 'lucide-react'
import style from './Preview.module.css'

const Preview = () => {
  return (
    <div className={style.container}>
        <div className={style.previewText}>
            <h1 className={style.heading}>
                Помощь животным
                <span style={{color:'var(--color-yellow)'}}> =</span>
                <br/>
                Помощь жизням.
            </h1>
            <p style={{fontSize:16}}>
            Оказываем помощь бездомным и домашним животным, пристраиваем кошек и собак в семьи, ведем просветительскую работу среди людей по содержанию и ответственному отношению к животным. 
            </p>
            <button className={style.btnPreview}>
                я хочу помочь
                <div>
                <Heart 
                fill='white'
                strokeWidth={0}/>    
                </div>
            </button>
        </div>
        <div className={style.previewImages}>
            <div className={style.gretaPreviewCard}>
                <div className={style.gretaPreviewCatBG}/>
                <h2>
                    Грета
                </h2>
            </div>
            <div className={style.jackPreviewCard}>
                <div className={style.jackPreviewDogBG}/>
                <h2>
                    Джек
                </h2>
            </div>
            <Heart
            className={style.heartPreview}
            fill='var(--color-violet)'
            strokeWidth={0}
            size={120}/>
        </div>

    </div>
  )
}

export default Preview