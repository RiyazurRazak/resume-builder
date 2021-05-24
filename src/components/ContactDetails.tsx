import React from 'react'
import Input from '@material-ui/core/FilledInput';
import styles from '../styles/components/TextField.module.css'
import { useDispatch, useSelector} from "react-redux";
import { setAddressSlice, setEmailSlice, setOptional1Slice, setOptional2Slice, setPhoneSlice, setWebsiteSlice } from '../redux/ContactDetails/ContactDetails';
import { Tstore } from '../store';



function ContactDetails() {
    
    const dispatch = useDispatch();
    const {email, website, address, phone, optional1, optional2} = useSelector((state :Tstore)=> state.contactSlice)
    


    return (
        <div>
         <Input 
            className={styles.textfield}  
            value={email} 
            onChange={(e) => dispatch(setEmailSlice({data: e.target.value}))} 
            color="secondary" 
            type="email"
            placeholder="Your Email Address"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

           <Input 
            className={styles.textfield}  
            value={website} 
            onChange={(e) => dispatch(setWebsiteSlice({data: e.target.value}))} 
            color="secondary" 
            placeholder="Your Website"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

          <Input 
            className={styles.textfield}  
            value={address} 
            onChange={(e) =>  dispatch(setAddressSlice({data: e.target.value}))} 
            color="secondary" 
            placeholder="Address"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            multiline
            />

          <Input 
            className={styles.textfield}  
            value={phone} 
            type="text"
            onChange={(e) =>  dispatch(setPhoneSlice({data: e.target.value}))} 
            color="secondary" 
            placeholder="Phone Number"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

          <Input 
            className={styles.textfield}  
            value={optional1} 
            onChange={(e) =>  dispatch(setOptional1Slice({data: e.target.value}))} 
            color="secondary" 
            placeholder="Optional 1"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />

           <Input 
            className={styles.textfield}  
            value={optional2} 
            onChange={(e) => dispatch(setOptional2Slice({data: e.target.value}))} 
            color="secondary" 
            placeholder="Optional 2"  
            aria-describedby="filled-weight-helper-email"
            inputProps={{
              'aria-label': 'weight',
            }}  
            fullWidth
            />
            
        </div>
       
    )
}

export default ContactDetails
