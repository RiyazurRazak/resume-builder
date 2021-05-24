import React from 'react'
import Fab from '@material-ui/core/Fab';
import styles from '../styles/components/TextField.module.css'
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';

import { useDispatch, useSelector } from 'react-redux';
import {setNewField, setSkillSlice, setPercentageSlice, setUpdateFields} from '../redux/SkillsDetails/SkillDetails'
import { IconButton } from '@material-ui/core';
import { Tstore } from '../store';

interface Ifeields {
    skill : string,
    percentage : string,
}

function SkillsDetails() {
    
    const dispatch = useDispatch()
 
    const {fields} = useSelector((state : Tstore)=> state.skillSlice)



    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {skill: "", percentage:""}}))
    }

    const skillStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setSkillSlice({index: index, data : e.target.value }))
    }

    const percentageStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setPercentageSlice({index: index, data : e.target.value }))
    }

    const deleteFieldHandller = (index : number)=>{
        const prevState = [...fields]
        prevState.splice(index, 1)
        dispatch(setUpdateFields({data : prevState }))
    }


    return (
        <div>

            {
                fields.map((field : Ifeields, index : number)=>{
                      return(
                          <div key={index}>
                               <Input 
                                  className={styles.textfield}  
                                  value={field.skill} 
                                  onChange={(e)=> skillStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Skill"  
                                  aria-describedby="filled-weight-helper-text"
                                  inputProps={{
                                     'aria-label': 'weight',
                                   }}  
                                  fullWidth
                                  endAdornment={
                                  <IconButton color="secondary" onClick={()=> deleteFieldHandller(index)}>
                                    <Delete color="secondary" />
                                  </IconButton> }
                                 />

                              <Input 
                                  className={styles.textfield}  
                                  value={field.percentage} 
                                  onChange={(e)=> percentageStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Skill Percentage eg: 90"  
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

export default SkillsDetails
