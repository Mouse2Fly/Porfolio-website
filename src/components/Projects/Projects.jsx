import styles from "./Projects.module.css"

import { Github } from "react-bootstrap-icons"

const Projects = () => {

    return(
        <div className={styles.container}>
            <div className={styles.projectbox}>
                <img className={styles.boximg} src="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <h2 className={styles.boxh2}>Working React E-shop.</h2>
                <div className={styles.aBox}>
                    <a className={styles.boxA} href="https://react-e-shop-mu.vercel.app/">Live Preview</a>
                    <a className={styles.pages}><Github/></a>
                </div>

            </div>
            <div className={styles.projectbox}>
                <img className={styles.boximg} src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <h2 className={styles.boxh2}>Vanila JS and firebase shop.</h2>
                <div className={styles.aBox}>
                    <a className={styles.boxA} href="https://skelbimai.vercel.app/">Live Preview</a>
                    <a className={styles.pages}><Github/></a>
                </div>
            </div>
            <div className={styles.projectbox}>
                <img className={styles.boximg} src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <h2 className={styles.boxh2}>React and a pre-existing api.</h2>
                <div className={styles.aBox}>
                    <a className={styles.boxA} href="https://film-search-one.vercel.app//">Live Preview</a>
                    <a className={styles.pages}><Github/></a>
                </div>
            </div>
        </div>
    )
}

export default Projects