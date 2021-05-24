import React from 'react'

import styles from '../../../styles/templates/template-4/index.module.css'

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

            <div className={styles.left}>
                 <div className={styles.avatar_cont}>
                  <img className={styles.avatar} src={avatar} alt={name}></img>
                </div> 
               
                <div className={styles.contact_cont}>
                    <h3 className={styles.title}>Contact</h3>

                    <p>{phone}</p>
                    <p>{address}</p>
                    <p>{email}</p>
                    <p>{website}</p>
                    <p>{optional1}</p>
                    <p>{optional2}</p>
                </div>
                
                <div className={styles.container}>
                  <h3 className={styles.title}>Skills</h3>
                   
                         {
                             skills.fields.map((skills : any, index: number)=>{
                                 return (
                                     <div key={index}>
                                         <p>{skills.skill}</p>
                                          <div className={styles.bar_out}>
                                             <div className={styles.bar} style={{width : skills.percentage.length> 0 ? skills.percentage + '%' : '0%'}}></div>
                                          </div>
                                     </div>   
                                 )
                             })
                         }
                 
                </div>
                
            </div>

            <div className={styles.right}>

                <div className={styles.header}> 
                  <h1 className={styles.name}>{name}</h1>
                  <hr className={styles.border} />
                  <h4>{profession}</h4>
                </div>

                <div className={styles.container}>
                  <h3 className={styles.title}>Profile</h3>
                  <p>{about}</p>
                </div>

                <div className={styles.container}>
                  <h3 className={styles.title}>Education</h3> 
                  {
                        education.fields.map((education, index)=>{
                            return(
                                <div key={index}>
                                    <h4>{education.institute}</h4>
                                    <p>{education.description}</p>
                                </div>
                            )
                        })
                  }
                </div>

                <div className={styles.container}>
                  <h3 className={styles.title}>Experience</h3> 
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

                
                 
            </div>
        </div>
    )
}

export default Index
