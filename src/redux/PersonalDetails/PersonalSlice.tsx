import {PayloadAction, createSlice} from '@reduxjs/toolkit'


interface iInitialState {
    name : string,
    profession : string,
    about : string,
    avatar : string,
}

type TPayload =  {
    data : string
}


const initialState : iInitialState = {
        name:  "Kendall Jenner",
        profession: "Fashion Blogger",
        about: "I am an experienced and creative blogger and writer. My main focus is fashion and lifestyle blogging but I am also an expert in social media management.",
        avatar : "https://images.pexels.com/photos/7077368/pexels-photo-7077368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}

export const PersonalSlice = createSlice({
    name: "PersonalDetails",
    initialState : initialState,
    reducers : {
        setName: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.name = payload.data
        },
        setProfession : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
             state.profession = payload.data
        },
        setAbout : (state: iInitialState,  {payload} : PayloadAction<TPayload>)=>{
            state.about = payload.data
        },
        setAvatar : (state :iInitialState,  {payload} : PayloadAction<TPayload>)=>{
            state.avatar = payload.data
        }
    }
})



export default PersonalSlice.reducer;
export const {setName} = PersonalSlice.actions;
export const {setProfession} = PersonalSlice.actions;
export const {setAbout} = PersonalSlice.actions;
export const {setAvatar} = PersonalSlice.actions;