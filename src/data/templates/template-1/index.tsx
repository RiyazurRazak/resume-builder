import React from 'react'
import styles from '../../../styles/templates/template-1/index.module.css'


import {useSelector} from 'react-redux'
import { Tstore } from '../../../store'

function Index() {


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
            star += ' ✩'
        }
        return star;  
      }


    return (
        <div className={styles.root}>

            <div className={styles.left}>

                <div className={styles.name_cont}>
                  <h1 className={styles.name}>{name}</h1>
                  <h4 className={styles.profession}>{profession}</h4>
                </div>

                <div className={styles.avatar_cont}>
                    <img className={styles.avatar} src={avatar} alt="avatar"></img>
                </div>

                <div className={styles.contact_cont}>
                   <h2 className={styles.contact_text}>Contact</h2>
                   <p className={styles.contact_text}>{email}</p>
                   <p className={styles.contact_text}>{website}</p>
                   <p className={styles.contact_text}>{address}</p>
                   <p className={styles.contact_text}>{phone}</p>
                   <p className={styles.contact_text}>{optional1}</p>
                   <p className={styles.contact_text}>{optional2}</p>
                   <p></p>
                </div>
                
            </div>

            <div className={styles.right}>

                 <div className={styles.about_cont}>
                    <h1>About Me</h1>
                    <p className={styles.about}>{about}</p>
                 </div>

             

                 <div className={styles.education_cont}>
                     <h1>Education</h1>

                     {
                         education.fields.map((education : any, index: number)=>{
                             return(
                                 <div key={index}>
                                     <h4>{education.institute}</h4>
                                     <p>{education.description}</p>
                                </div>

                             )
                         })
                     }

                 </div>

                 <div>
                     <h1>{experience.customTitle.length > 0 ? experience.customTitle : "Experience"}</h1>

                     {
                         experience.fields.map((experience : any, index: number)=>{
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
                     <h1>Skills</h1>
                     <div className={styles.skills_inner_cont}>
                          <div>
                             <ul>
                               {
                                 skills.fields.map((skill : any, index: number)=>{
                                   return <li className={styles.skill} key={index}>
                                     <div className={styles.skill_name}>
                                      {skill.skill}
                                     </div>
                                     <div className={styles.star}>
                                        {generateStar(skill.percentage)}
                                     </div>
                                    </li>
                                 })
                               }
                             </ul>
                          </div>
                     </div>
                 </div>
            </div>

        </div>
    )
}

export default Index
