import styles from './Stats.module.css'

const Stats = () => { 
  return (
    <div className={styles.container}>
        <h1 style={{color:'var(--color-blue)'
        }}>
            Немного цифр
        </h1>
        <div className={styles.stats}>
            <div className={styles.statsCard}>
                <div className={styles.digits}>
                    <div className={styles.catFace}/>
                    <h1>
                        67млн
                    </h1>
                </div>
                <div className={styles.text}>
                    <h2>бездомных</h2>
                    <h3>животных <br/>на улицах</h3>
                </div>
            </div>
            <div className={styles.statsCard}>
                <div className={styles.digits}>
                    <div className={styles.dogFace}/>
                    <h1>
                        144тыс
                    </h1>
                </div>
                <div className={styles.text}>
                    <h2>животных</h2>
                    <h3>содержится <br/> в приютах</h3>
                </div>
            </div>
            <div className={styles.statsCard}>
                <div className={styles.digits}>
                    <div className={styles.badGuy}/>
                    <h1>
                        1 из 5
                    </h1>
                </div>
                <div className={styles.text}>
                    <h2>живодеров</h2>
                    <h3>несёт <br/> наказание</h3>
                </div>
            </div>
            <div className={styles.statsCard}>
                <div className={styles.digits}>
                    <div className={styles.couple}/>
                    <h1>
                        37%
                    </h1>
                </div>
                <div className={styles.text}>
                    <h2>россиян</h2>
                    <h3>стерилизуют <br/> питомцев</h3>
                </div>
            </div>
        </div>
        <div className={styles.article}>
            <h1>Наша с Вами цель <span> - <br/>
            Влиять на цифры</span></h1>
            <p>Оказываем помощь бездомным и домашним животным, пристраиваем кошек и собак в семьи, ведем 
                просветительскую работу среди людей по содержанию и ответственному отношению к животным. Оказываем 
                помощь бездомным и домашним животным, пристраиваем кошек и собак в семьи, ведем просветительскую 
                работу среди людей по содержанию и ответственному отношению к животным.</p>
        </div>
    </div>
  )
}

export default Stats