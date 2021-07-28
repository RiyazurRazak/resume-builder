import React from 'react'

import styles from '../../../styles/templates/template-2/index.module.css'

import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {

    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    const education = useSelector((state : Tstore)=> state.educationalSlice)
    const experience = useSelector((state : Tstore)=> state.experienceSlice)
    const skills = useSelector((state : Tstore)=> state.skillSlice)

    return (
       <div>
        <div className={styles.root}>
            <div className={styles.left}>
                 <div className={styles.name_cont}>
                 <p className={`${styles.heading} ${styles.name}`}>{name}</p>
                 <hr className={styles.border} />
                 <p className={styles.profession}>{profession}</p>
                </div>

                <div className={styles.content}>
                    <div>
                        <p className={styles.heading}>Personal Profile</p>
                        <hr className={styles.border} />
                        <p className={styles.desc}>{about}</p>
                    </div>
                    <br />
                    <div>
                        <p className={styles.heading}>{experience.customTitle.length > 0 ? experience.customTitle : "Experience"}</p>
                        <hr className={styles.border} />
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
                    <br />  

                    <div>
                        <p className={styles.heading}>Educational Background</p>
                        <hr className={styles.border} />

                        {
                            education.fields.map((education : any, index : number)=>{
                                return(
                                    <div key={index}>
                                        <h4>{education.institute}</h4>
                                        <p className={styles.desc}>{education.description}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className={styles.right}>
                 <div className={styles.avatar_cont}>
                     <img className={styles.avatar}  src={avatar} alt={name}></img>
                 </div>

                 <div className={styles.content}>
                     <div>

                       <p className={styles.heading}>Skills</p>
                       <hr className={styles.border} />
                       
                       {
                           skills.fields.map((skill : any, index : number)=>{
                               if(skill.skill)
                               return(
                                <div key={index} className={styles.skill_cont}>
                                  <p>{skill.skill}</p>
                                  <div className={styles.bar_out}>
                                     <div className={styles.bar} style={{width : skill.percentage.length> 0 ? skill.percentage - 20 + '%' : '0%'}}></div>
                                  </div>
                                </div>
                               )
                               else
                               return null
                           })
                       }
                    
                  

                    
                     </div>
                     <br />

                  
                  
                 </div>
            </div>
        </div>
       
        <div className={styles.contact_cont}>
          <p>{email}</p>
          <p>{website}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{optional1}</p>
          <p>{optional2}</p>          
        </div>
       
    </div> 
    )
}

export default Index
