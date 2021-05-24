import React, { useState } from 'react'
import styles from '../styles/components/TemplateGrid.module.css'
import Skeleton from '@riyazurrazak/react-skeleton'
import {Link} from 'react-router-dom'

import MetaData from '../data/TemplatesMeta'

interface IisImageLoad {
    index : number,
    isLoad : boolean,
}

function Grid() {


    const [isImageLoad, setIsImageLoad] = useState<IisImageLoad[]>([]);


    const loadHandller = (index: number, isLoad : boolean)=>{
         setIsImageLoad(prev=> [...prev, {index , isLoad} ])
    }



    return (
        <div className={styles.root}>

            {
                MetaData.map((template : any, index: number)=>{
                     
                    const currentImg = isImageLoad.filter((state)=> state.index === index) 

                    return(
                        <div key={index}>
                        <Skeleton className={styles.image} isLoading={currentImg[0] ? false : true }wave width="250px" height="350px" backgroundColor="rgba(255,255,255,0.13)" highlightColor="rgba(255,255,255,0.08)"><span></span></Skeleton>
                        <Link to={`/editor/${template.id}`} ><img className={styles.image} style={{display: currentImg[0] === undefined ? "none" : 'block'}} onLoad={() => loadHandller(index, false)} src={template.src}  alt="template"></img></Link>
                        </div>
                    )
                })
            }
            
           
           
        </div>
    )
}

export default Grid
