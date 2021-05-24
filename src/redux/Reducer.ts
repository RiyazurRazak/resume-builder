import personalSlice from './PersonalDetails/PersonalSlice'
import contactSlice from './ContactDetails/ContactDetails'
import educationalSlice from './EducationalDetails/EducationalDetails'
import experienceSlice from './ExperienceDetails/ExperienceDetails'
import skillSlice from './SkillsDetails/SkillDetails'

const combineReducer = {

   personalSlice,
   contactSlice,
   educationalSlice,
   experienceSlice,
   skillSlice,
   
}


export default combineReducer