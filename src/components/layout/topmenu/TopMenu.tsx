import { NavLink } from "react-router-dom";
import styles from './TopMenu.module.css'
import Logo from "../../../utils/Logo";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
<div className={styles.navBar}>
    <nav className={styles.navMenu}>
        <Link to={'/ryadom/'} className={styles.brand}>
            <Logo/>
        </Link>
        <div>
        <ul>
            <input type="checkbox" id="checkbox-toggle" className={styles.checkboxToggle}/>
            <label htmlFor="checkbox-toggle" className={styles.hamburger}>
                <span className={styles.hamburgerLine}></span>
            </label>
            <div className={styles.links}>
            <li>
                    <NavLink 
                    to={`/ryadom/allcats`} 
                    className={styles.link}
                    style={({ isActive, isTransitioning }) => {
                        return {
                            color: isActive ? "antiquewhite" : "",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                            }}
                            >все котики</NavLink>
                </li>
                <li>
                    <NavLink 
                    to={`/ryadom/favorites`} 
                    className={styles.link}
                    style={({ isActive, isTransitioning }) => {
                        return {
                            color: isActive ? "antiquewhite" : "",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                            }}
                            >любимые котики</NavLink>
                </li>
                <li>
                    <NavLink 
                    to={`/ryadom/posts`} 
                    className={styles.link}
                    style={({ isActive, isTransitioning }) => {
                        return {
                            color: isActive ? "antiquewhite" : "",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                    >статьи</NavLink>
            </li>
            </div>
        </ul>
        </div>
    </nav>
</div>
  )
}

export default TopMenu