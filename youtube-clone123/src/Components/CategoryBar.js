import React,{useState} from 'react'
import { getVideosByCategory,getPopularVideos } from '../video.action';
import './_CategoryBar.scss'
import {useDispatch} from 'react-redux';
 const keywords=[
    'All',
   'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
   'Shwetabh',
   'Mia khanlifa'


]

const CategoryBar=()=>{
    const[activeElement,setActiveElement]=useState('All');
    const dispatch=useDispatch()
    const handleClick=(value)=>{
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
         } else {
            dispatch(getVideosByCategory(value))
         }
    }
    return (
        <div className="CategoryBar">
            {
                keywords.map((value,i)=><span onClick={()=>handleClick(value)}key={i} className={activeElement===value ? 'active':''}>{value}</span>)
            }
            
        </div>
    )
}

export default CategoryBar
