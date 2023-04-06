import { TypeAnimation } from "react-type-animation"

import styles from "./AboutMe.module.css"

const AboutMe = () => {

    return(
        <div>
            <div className={styles.box1}>
                <div className={styles.box3}>
                    <h2 style={{ fontSize: '4em'}}>Hello</h2>
                    <TypeAnimation className={styles.description}
                        sequence={[
                            'I am Dovydas and I am a Back-End developer', 2000,
                            'I am Dovydas and I am a Front-End developer', 2000,
                            'I am Dovydas and I am a Team player', 2000
                        ]}
                        speed={150}
                        style={{ fontSize: '2em'}}
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.descriptionFront}>
                    <h2 className={styles.names}>Front-End</h2>
                    <ul>
                        <li>HTML
                            <p>Experienced</p>
                        </li>
                        <li>CSS
                            <p>Experienced</p>
                        </li>
                        <li>SASS
                            <p>Basics</p>
                        </li>
                        <li>Bootstrap
                            <p>Experienced</p>
                        </li>
                        <li>JavaScript
                            <p>Experienced</p>
                        </li>
                        <li>React
                            <p>Basics</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.descriptionBack}>
                    <h2 className={styles.names}>Back-End</h2>
                    <ul>
                        <li>Python
                            <p>Basics</p>
                        </li>
                        <li>NodeJS
                            <p>Experienced</p>
                        </li>
                        <li>MySQL
                            <p>Basics</p>
                        </li>
                        <li>Firebase
                            <p>Experienced</p>
                        </li>
                        <li>MongoDB
                            <p>Basics</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe