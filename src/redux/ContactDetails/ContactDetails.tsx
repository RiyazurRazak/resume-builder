import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface iInitialState {
    email: string,
    website : string,
    address : string,
    phone : string,
    optional1 : string,
    optional2 : string,
}

type TPayload =  {
    data : string
}


const initialState : iInitialState = {
    email: 'kendall@example.com',
    website : 'example.com',
    address : '123 Any Where Street City State',
    phone : '+123 123 456 789',
    optional1 : '',
    optional2 : '',
}

export const ContactSlice = createSlice({
    name: "ContactDetails",
    initialState : initialState,
    reducers : {
        setEmailSlice: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.email = payload.data
        },
        setWebsiteSlice :  (state : iInitialState, {payload}: PayloadAction<TPayload>)=>{
            state.website = payload.data
        },
        setAddressSlice : (state : iInitialState,{payload}: PayloadAction<TPayload> )=>{
            state.address = payload.data
        },
        setPhoneSlice : (state : iInitialState,{payload}: PayloadAction<TPayload> )=>{
            state.phone = payload.data
        },
        setOptional1Slice : (state : iInitialState,{payload}: PayloadAction<TPayload> )=>{
            state.optional1 = payload.data
        },
        setOptional2Slice : (state : iInitialState,{payload}: PayloadAction<TPayload> )=>{
            state.optional2 = payload.data
        },
       
    }
})



export default ContactSlice.reducer;
export const {setEmailSlice} = ContactSlice.actions;
export const {setWebsiteSlice} = ContactSlice.actions;
export const {setAddressSlice} = ContactSlice.actions;
export const {setPhoneSlice} = ContactSlice.actions;
export const {setOptional1Slice} = ContactSlice.actions;
export const {setOptional2Slice} = ContactSlice.actions;
