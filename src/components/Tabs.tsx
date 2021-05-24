import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styles from '../styles/components/Tabs.module.css'
import PersonalDetails from './PersonalDetails';
import ContactDetails from './ContactDetails';
import EducationDetails from './EducationDetails';
import ExperienceDetails from './ExperienceDetails';
import SkillsDetails from './SkillsDetails';


function TabPanel({ children, value, index, ...other } : any ) {
  
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <div className={styles.panel}>
                {children}
            </div>
          </Box>
        )}
      </div>
    );
  }

function RightTabs() {

    const [value, setValue] = useState<number>(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number)=>{
        setValue(newValue)
    }

    return (
        <div className={styles.root}>
        <AppBar  position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Personal Details" />
          <Tab label="Contact Details"  />
          <Tab label="Educational Details"  />
          <Tab label="Experience Details"  />
          <Tab label="Skills" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <PersonalDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
         <ContactDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
         <EducationDetails />
      </TabPanel>
      <TabPanel value={value} index={3}>
         <ExperienceDetails />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkillsDetails />
      </TabPanel>
        </div>
    )
}

export default RightTabs
