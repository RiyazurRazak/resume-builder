import React from 'react'
import Input from '@material-ui/core/FilledInput';
import { useDispatch, useSelector} from "react-redux";
import {setAbout, setAvatar, setName, setProfession} from '../redux/PersonalDetails/PersonalSlice'
import styles from '../styles/components/TextField.module.css'
import { Tstore } from '../store';

function PersonalDetails() {
    
    const dispatch = useDispatch()
    const {name, profession, about, avatar} = useSelector((state : Tstore)=> state.personalSlice)

    return (
        <div>
         <Input 
            className={styles.textfield}  
            value={name} 
            onChange={(e) =>  dispatch(setName({data: e.target.value}))} 
            color="secondary" 
            placeholder="Your Name"  
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

           <Input 
            className={styles.textfield}  
            value={profession} 
            onChange={(e) => dispatch(setProfession({data: e.target.value}))} 
            color="secondary" 
            placeholder="Your Profession"  
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

          <Input 
            className={styles.textfield}  
            value={avatar} 
            onChange={(e) =>  dispatch(setAvatar({data: e.target.value}))} 
            color="secondary" 
            placeholder="Avatar URL"  
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

            <Input 
            className={styles.textfield}  
            value={about} 
            onChange={(e) => dispatch(setAbout({data: e.target.value}))} 
            color="secondary" 
            placeholder="About"  
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            multiline
            />

        </div>
    )
}

export default PersonalDetails
