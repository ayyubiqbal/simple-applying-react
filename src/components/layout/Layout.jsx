import { Link } from "react-router-dom"
import classes from "./Layout.module.css"

const Layout = (props) => {
    const path = window.location.pathname;
    // console.log(path);
    return (
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div className={classes.brand}>
                    <h3>Brand Name</h3>
                </div>
                <div className={classes.menu}>
                    <ul >
                        <li>
                            <Link className={path === '/' ? classes.activeNavItem : classes.navItem} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={path === '/about' ? classes.activeNavItem : classes.navItem} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={path === '/help' ? classes.activeNavItem : classes.navItem} to="/help">
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link className={path === '/clock' ? classes.activeNavItem : classes.navItem} to="/clock">
                                Clock
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                {props.children}
            </main>
            <footer className={classes.footer}>
                <h3>Footer</h3>
                <ul>
                    <li>Footer link one</li>
                    <li>Footer link Two</li>
                    <li>Footer link Three</li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout