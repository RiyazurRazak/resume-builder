import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface Ifields {
    skill : string,
    percentage : string,
}

interface iInitialState {
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
    fields : [{
        skill : 'Blog and Layout Design',
        percentage : '90',
    },
    {
        skill : 'Online Data Collection',
        percentage : '75',
    },
    {
        skill : 'Stratagic Planing',
        percentage : '84',
    },
    {
        skill : 'Editing and Authoring Tools',
        percentage : '60',
    },
    {
        skill : 'Social Media Management',
        percentage : '55',
    },
    {
        skill : 'Communication',
        percentage : '40',
    },
    
]
}

export const SkillsSlice = createSlice({
    name: "SkillDetails",
    initialState : initialState,
    reducers : {
        setSkillSlice: (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
             state.fields[payload.index].skill = payload.data
        },
        setPercentageSlice : (state : iInitialState, {payload} : PayloadAction<TPayload>)=>{
            state.fields[payload.index].percentage = payload.data
       },
       setNewField : (state : iInitialState, {payload} : PayloadAction<TNewPayload>)=>{
        state.fields = [...state.fields , payload.data]
       },
       setUpdateFields : (state : iInitialState, {payload} : PayloadAction<TUpdate>)=>{
           state.fields = payload.data
       }
       
       
    }
})



export default SkillsSlice.reducer;
export const {setSkillSlice} = SkillsSlice.actions;
export const {setPercentageSlice} = SkillsSlice.actions;
export const {setNewField} = SkillsSlice.actions;
export const {setUpdateFields} = SkillsSlice.actions;


