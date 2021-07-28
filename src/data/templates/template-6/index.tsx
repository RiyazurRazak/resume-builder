import React from 'react'

import styles from '../../../styles/templates/template-6/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    return (
        <div className={styles.root}>
            
            <div className={styles.header}>
                <div className={styles.avatar_cont}>
                    <img className={styles.avatar} src={avatar} alt={name}></img>
                </div>

                <div className={styles.intro_cont}>
                    <h1 className={styles.title}>{name}</h1>
                    <h4 className={styles.title}>{profession}</h4>
                </div>
            </div>

            <div className={styles.content}>

                <div className={styles.left}>

                    <div className={styles.container}>
                       <h3 className={styles.title}>Profile</h3>
                       <p>{about}</p>
                    </div>
                    
                    <div className={styles.container}>
                      <h3 className={styles.title}>{experience.customTitle.length > 0 ? experience.customTitle : "Experience"}</h3>
                      {
                          experience.fields.map((experience : any, index : number)=>{
                              return (
                                  <div key={index}>
                                     <h3 className={styles.company}>{experience.company}</h3>
                                     <h5 className={styles.role}>{experience.role}</h5>
                                     <p className={styles.desc}>{experience.experience}</p> 
                                  </div>    
                              )
                          })
                      } 
                    </div>

                    <div className={styles.coontainer}>
                       <h3 className={styles.title}>Contact</h3>
                       <p>{email}</p>
                       <p>{address}</p>
                       <p>{phone}</p>
                       <p>{website}</p>
                       <p>{optional1}</p>
                       <p>{optional2}</p>
                    </div>

                </div>

                <div className={styles.right}>
                    
                    <div className={styles.container}>
                       <h3 className={styles.title}>Education</h3>
                       {
                           education.fields.map((education : any, index : number)=>{
                            return (
                                <div key={index}>
                                   <h4 className={styles.company}>{education.institute}</h4>
                                   <p className={styles.desc}>{education.description}</p> 
                                </div>    
                            )
                        })
                       }

                    </div>

                    <div className={styles.container}>
                      <h3 className={styles.title}>Skills</h3>
                      {
                          skills.fields.map((skills: any, index: number)=>{
                              return (
                                  <p>{skills.skill}</p>
                              )
                          })
                      }
                    </div>
                </div>

            </div>
            <div className={styles.footer}></div>
        </div>
    )
}

export default Index
