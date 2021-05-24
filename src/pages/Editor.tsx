import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import styles from '../styles/pages/Editor.module.css'
import RightTabs from '../components/Tabs';
import Fab from '@material-ui/core/Fab';

import DownloadIcon from '@material-ui/icons/GetApp';
import Template1 from '../data/templates/template-1';
import Template2 from '../data/templates/template-2';
import Template3 from '../data/templates/template-3';
import Template4 from '../data/templates/template-4';
import Template5 from '../data/templates/template-5';
import Template6 from '../data/templates/template-6';


interface iParams {
    id : string
}

function Editor() {

    const {id} = useParams<iParams>();

    useEffect(()=>{
         window.scroll({
             top  : 0,
             left : 0,
         })
    },[])


    const renderTemplateHandller = (id : string)=>{
          switch (id) {
              case "6c6066ca-67a5-4a5f-8717-cb2213f42152":
                  return <Template1 />
               
              
              case "7005392d-a134-47c1-ba59-c87fcc029875":      
                  return <Template2 />

              case "7d0e0fc1-32f0-4a3f-b83e-1ebaff7d56e7":
                   return <Template3 />   
              
              case "1ec3031b-658e-4d8d-bdfc-3c5a1559a53c":
                   return <Template4 />
              
              case "7d2bc835-11c3-4baa-92f8-55a4b716a407":
                  return <Template5 />

              case "da7f6200-0ab5-4f71-90d7-2522110b0f57":
                  return <Template6 />  
                  
              default:
                  return <h1 style={{color: "#000"}}>No Template Found</h1>
            
          }
    }

    return (
        <div className={styles.root}>
        
            <RightTabs />

            <div className={styles.right}>
               
                <div className={styles.paper}>
                   {
                       renderTemplateHandller(id)
                   }
                </div>
            </div>

            <Fab className={styles.fab} color="secondary" onClick={()=> window.print()}>
                    <DownloadIcon />
            </Fab>
            
        </div>
    )
}

export default Editor
