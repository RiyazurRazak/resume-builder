import React from 'react'
import styles from '../../../styles/templates/template-3/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'


function Index() {
    
    // eslint-disable-next-line
    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    return (
        <div className={styles.root}>

            <div className={styles.name}>
                <h1 >{name}</h1>
                <h4>{profession}</h4>
            </div>

            <div className={styles.contact_cont}>
                  <p>{address}</p>
                  <p className={styles.separator}>⋅</p>
                  <p>{phone}</p>
                  <p className={styles.separator}>⋅</p>
                  <p>{email}</p>
                  <p className={styles.separator}>⋅</p>
                  <p>{website}</p>
                  {optional1.length > 0 && <p className={styles.separator}>⋅</p>}
                  <p>{optional1}</p>
                  {optional2.length > 0 && <p className={styles.separator}>⋅</p>}
                  <p>{optional2}</p>
            </div>

            <div className={styles.about_container}>
                <p>{about}</p>
            </div>
            <hr />

            <div>
                <h3 className={styles.title}>Professional Experience</h3>
                {
                    experience.fields.map((experience, index)=>{
                        return(
                            <div key={index}>
                                <h4 className={styles.company}>{experience.company}</h4>
                                <h6 className={styles.role}>{experience.role}</h6>
                                <p>{experience.experience}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
               <h3 className={styles.title}>Education</h3>

               {
                    education.fields.map((education, index)=>{
                        return(
                            <div key={index}>
                                <h4 className={styles.company}>{education.institute}</h4>
                                <p>{education.description}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
               <h3 className={styles.title}>Skills</h3>
               <ul className={styles.skills_list}>
               {
                   skills.fields.map((skill, index)=>{
                       return  <li key={index}>{skill.skill}</li>
                   })
               }
               </ul>
            </div>
        </div>
    )
}

export default Index
