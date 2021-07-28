import React from 'react'
import Fab from '@material-ui/core/Fab';
import styles from '../styles/components/TextField.module.css'
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';

import { useDispatch, useSelector } from 'react-redux';
import {setCompanySlice, setExperienceSlice, setNewField, setUpdateFields, setRoleSlice, setCustomTitle} from '../redux/ExperienceDetails/ExperienceDetails'
import { Tstore } from '../store';
import { IconButton } from '@material-ui/core';


interface Ifeields {
    company : string,
    role: string,
    experience : string,
}

function ExperienceDetails() {
    
    const dispatch = useDispatch()
   
        const {customTitle, fields} = useSelector((state : Tstore)=> state.experienceSlice)

  

    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {company: "", role: "", experience:""}}))
    }

    const companyStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setCompanySlice({index : index , data: e.target.value}))
    }

    const experienceStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setExperienceSlice({index : index , data: e.target.value}))
    }

    const roleStateUpdateHandller = (e : any, index: number)=>{
        dispatch(setRoleSlice({index: index ,data: e.target.value}))
    }

    const deleteFieldHandller = (index : number)=>{
        const prevState = [...fields]
        prevState.splice(index, 1)
        dispatch(setUpdateFields({data : prevState }))
    }


    return (
        <div>

        <Input 
            className={styles.textfield}  
            value={customTitle} 
            color="secondary" 
            onChange={(e)=> dispatch(setCustomTitle({data : e.target.value, index : 1}))}
            placeholder="Custom Title"  
            aria-describedby="filled-weight-helper-text"
            inputProps={{
             'aria-label': 'weight',
            }}  
            fullWidth
        />

            {
                fields.map((field : Ifeields, index : number)=>{
                      return(
                          <div key={index}>
                               <Input 
                                  className={styles.textfield}  
                                  value={field.company} 
                                  onChange={(e)=> companyStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Company Name"  
                                  aria-describedby="filled-weight-helper-text"
                                  inputProps={{
                                     'aria-label': 'weight',
                                   }}  
                                  fullWidth
                                  endAdornment={
                                      <IconButton color="secondary" onClick={()=>deleteFieldHandller(index)}>
                                          <Delete color="secondary"/>
                                      </IconButton>
                                  }
                                 />

                                 <Input 
                                  className={styles.textfield}  
                                  value={field.role} 
                                  onChange={(e)=> roleStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Role"  
                                  aria-describedby="filled-weight-helper-text"
                                  inputProps={{
                                     'aria-label': 'weight',
                                   }}  
                                  fullWidth
                                 />

                              <Input 
                                  className={styles.textfield}  
                                  value={field.experience} 
                                  onChange={(e)=> experienceStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Experience"  
                                  aria-describedby="filled-weight-helper-text"
                                  inputProps={{
                                     'aria-label': 'weight',
                                   }} 
                                  multiline  
                                  fullWidth
                                 />
                          </div>    
                      )
                })
            }
            
            <Fab onClick={addFieldHandller}>
                <Add />
            </Fab>
        </div>
    )
}

export default ExperienceDetails

