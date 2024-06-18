import Goods from "../../components/layout/goods/Goods"
import Preview from "../../components/layout/preview/Preview"
import Stats from "../../components/layout/stats/Stats"
import Stripe from "../../components/layout/stripe/Stripe"
import WeHelp from "../../components/layout/wehelp/WeHelp"
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.media}>
        <Preview/>
        <Stripe/>
        <WeHelp/>
        <Goods/>
        <Stats/>
    </div>
  )
}

export default Home