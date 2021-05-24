import React from 'react'
import Grid from '../components/TemplatesGrid'
import styles from '../styles/pages/HomePage.module.css'
function Home() {
    return (
        <div>
            <div className={styles.brand_root}>
               <h3 className={styles.brand}>Resume Builder</h3>
            </div>

           <div className={styles.heading_root}>
               <h1 className={styles.heading}>Generate Your Dream Resume</h1>
           </div>

           <h4 className={styles.templates}>Ready To Use Templates</h4>

           <Grid />
        </div>
    )
}

export default Home
