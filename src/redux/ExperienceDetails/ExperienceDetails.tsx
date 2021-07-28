import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface Ifields {
    company : string,
    role: string,
    experience : string,
}

interface iInitialState {
    customTitle : string
    fields : Ifields[]
}

type TPayload =  {
    index : number,
    data : string
}

type TNewPayload = {
    data : Ifields
}

type TUpdate = {
    data : Ifields[]
}



const initialState : iInitialState = {
    customTitle : "",
    fields : [{
        company : 'BAKS Studio',
        role : 'Fashion Blogger , October 2018 to Present',
        experience : "Writes blogs and promotes them on social media Manages the company's social media profiles Plans and creates the editorial calendar for the company's blog",
    },{
        company: "The Fab Mistress Lifestyle Blog",
        role : "Blogger , May-Oct 2018",
        experience : 'Conducted research and pitched blog topic ideas to the Blog Manager Wrote blogs and articles as assigned Assisted in other web content projects'
    },
  ]
}

export const ExperienceSlice = createSlice({
    name: "EcperirnceDetails",
    initialState : initialState,
    reducers : {
        setCustomTitle: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.customTitle = payload.data
       },
        setCompanySlice: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
             state.fields[payload.index].company = payload.data
        },
        setExperienceSlice : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.fields[payload.index].experience = payload.data
       },
       setRoleSlice : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
        state.fields[payload.index].role = payload.data
       },
       setNewField : (state : iInitialState, {payload} : PayloadAction<TNewPayload>)=>{
        state.fields = [...state.fields , payload.data]
       },
       
       setUpdateFields : (state : iInitialState, {payload} : PayloadAction<TUpdate>)=>{
        state.fields = payload.data
      }
       
       
    }
})



export default ExperienceSlice.reducer;
export const {setCustomTitle} = ExperienceSlice.actions
export const {setCompanySlice} = ExperienceSlice.actions;
export const {setExperienceSlice} = ExperienceSlice.actions;
export const {setRoleSlice} = ExperienceSlice.actions;
export const {setNewField} = ExperienceSlice.actions;
export const {setUpdateFields} = ExperienceSlice.actions;


