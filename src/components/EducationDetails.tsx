import React from 'react'
import Fab from '@material-ui/core/Fab';
import styles from '../styles/components/TextField.module.css'
import { Add, Delete } from '@material-ui/icons';
import Input from '@material-ui/core/FilledInput';
import { useDispatch, useSelector } from 'react-redux';
import { setDescriptionSlice, setInstituteSlice, setNewField, setUpdateFields } from '../redux/EducationalDetails/EducationalDetails';
import { Tstore } from '../store';
import { IconButton } from '@material-ui/core';

interface Ifeields {
    institute : string,
    description : string,
}

function EducationDetails() {
    
    const dispatch = useDispatch()


    const {fields} = useSelector((state : Tstore)=> state.educationalSlice)




    const addFieldHandller = ()=>{
        dispatch(setNewField({data: {institute: "", description:""}}))
    }

    const instituteStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setInstituteSlice({index: index, data : e.target.value }))
    }

    const descriptionStateUpdateHandller = (e : any, index : number)=>{
        dispatch(setDescriptionSlice({index : index, data: e.target.value}))
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
                                  value={field.institute} 
                                  onChange={(e)=> instituteStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Institute Name"  
                                  aria-describedby="filled-weight-helper-text"
                                  inputProps={{
                                     'aria-label': 'weight',
                                   }}  
                                  fullWidth
                                  endAdornment={
                                      <IconButton color="secondary" onClick={() => deleteFieldHandller(index)}>
                                          <Delete color="secondary" />
                                      </IconButton>
                                  }
                                 />

                              <Input 
                                  className={styles.textfield}  
                                  value={field.description} 
                                  onChange={(e)=> descriptionStateUpdateHandller(e , index)} 
                                  color="secondary" 
                                  placeholder="Description"  
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

export default EducationDetails
