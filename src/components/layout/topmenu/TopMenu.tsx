import { NavLink } from "react-router-dom";
import styles from './TopMenu.module.css'
import Logo from "../../../utils/Logo";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
<div className={styles.navBar}>
    <nav className={styles.navMenu}>
        <Link to={'/home'} className={styles.brand}>
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
                    to={`/allcats`} 
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
                    to={`/favorites`} 
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
                    to={`/posts`} 
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