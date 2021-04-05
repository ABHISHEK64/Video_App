import React, { useEffect, useState } from 'react'
import './_Video.scss'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Avatar } from '@material-ui/core';
import { homeVideosReducer } from '../Video.Reducer';
import request from '../API';
import moment from 'moment';
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useHistory } from 'react-router';
import ChannelScreen from '../Screen/ChannelScreen';
const Video=({video})=>{
    const{id,snippet:{channelId,channelTittle,title,publishedAt,thumbnails:{medium},},contentDetails,}=video
    const [views,setView]=useState(null)
    const [duration,setDuration]=useState(null)
    const seconds=moment.duration(duration).asSeconds()
    const _duration=moment.utc(seconds*1000).format('mm:ss')
    const [channelIcon,setChannelIcon]=useState(null)
    const _videoID=id?.videoId||contentDetails?.videoId||id
    const history=useHistory()
    useEffect(()=>{
        const get_video_details=async()=>{
           const{data:{items},}= await request('/videos',{
                params:{
                    part:'contentDetails,statistics',
                    id:_videoID,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setView(items[0].statistics.viewCount)
            //console.log('Duration',_duration)
        }
        get_video_details()
    },[_videoID])
    useEffect(()=>{
        const get_channel_icon=async()=>{
           const{data:{items}}= await request('/channels',{
                params:{
                    part:'snippet',
                    id:channelId,
                    
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])
    const handleVideoClick=()=>{
        history.push(`/watch/${_videoID}`)
    }
    
    return (
        <div className='video' onClick={handleVideoClick}>
          <div className="video__top">
            <img src={medium.url} alt="" effect='blur'/>
            <span>{_duration}</span>
          </div>
          <div className="video__title">
             {title}
          </div>
          <div className="video__details">
          <span>
           <VisibilityIcon/> {numeral(views).format("0.a")} Views .
          </span>
          <span>
              {moment(publishedAt).fromNow()}
          </span>

          </div>
          {!ChannelScreen &&(
          <div className="video__channel">
           <span>
               <Avatar src={channelIcon?.url} effect='blur'/>
           </span>
           <p style={{color:'white'}}>
               {channelTittle}
           </p>
          </div>
          )}
        </div>
    
    )
}

export default Video
