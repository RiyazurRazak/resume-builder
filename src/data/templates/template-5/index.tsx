import React from 'react'
import styles from '../../../styles/templates/template-5/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    // eslint-disable-next-line
    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    const generateStar = (percentage : string)=>{
        let star =''
        const num = parseInt(percentage);
        const round = Math.round(num/20)
        for(let i = 0; i < round; i++){
            star += ' ★'
        }
        for(let i=0; i< 5-round;i++){
            star += ' ☆'
        }
        return star;  
      }



    return (
        <div className={styles.root}>

            <div className={styles.left}>
                
                 <div className={`${styles.container} ${styles.left_cont}`}>
                     <div>
                         <h1 className={`${styles.title} ${styles.name}`}>{name}</h1>
                         <p>{profession}</p>
                     </div>
                     <div className={styles.inner_container}>
                         <h3 className={styles.title}>Profile Summary</h3>
                         <p>{about}</p>
                     </div>

                     <div className={styles.inner_container}>
                       <h3 className={styles.title}>Contact Details</h3>
                       <p>{address}</p>
                       <p>{phone}</p>
                       <p>{email}</p>
                       <p>{website}</p>
                       <p>{optional1}</p>
                       <p>{optional2}</p>
                     </div>
                 </div>
            </div>

            <div className={styles.right}>
                  
                  <div className={styles.container}>
                    <h3 className={styles.title}>Skills</h3>
                    <ul className={styles.skill_list}>
                        {
                            skills.fields.map((skills : any, index : number)=>{
                                return (
                                    <li key={index} className={styles.skill_row}>
                                        <div>
                                            <p>{skills.skill}</p>
                                        </div>
                                        <div className={styles.star}>
                                            {generateStar(skills.percentage)}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                  </div>

                  <div className={`${styles.container} ${styles.container_space}`}>
                       <h3 className={styles.title}>Career Background</h3>
                       {
                             experience.fields.map((experience : any, index : number)=>{
                                return(
                                    <div key={index}>
                                        <h4 className={styles.company}>{experience.company}</h4>
                                        <h6 className={styles.role}>{experience.role}</h6>
                                        <p className={styles.desc}>{experience.experience}</p>
                                    </div>
                                )
                            })
                       }
                  </div>

                  <div className={`${styles.container} ${styles.container_space}`}>
                       <h3 className={styles.title}>Educational Background</h3>
                       {
                             education.fields.map((education : any, index: number)=>{
                                return(
                                    <div key={index}>
                                        <h4 className={styles.company}>{education.institute}</h4>
                                        <p className={styles.desc}>{education.description}</p>
                                    </div>
                                )
                            })
                       }
                  </div>
            </div>
        </div>
    )
}

export default Index
