import React,{useEffect, useState} from 'react';
import axios from 'axios';
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos';
import Video from '../Video/Video';
import VideoContent from '../VideoContent/VideoContent';
import {useParams} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { CircularProgress } from '@mui/material';
import './VideoPlayer.css';


const VideoPlayer = () => {

  let {videoId} = useParams();

  const [videoInfo,setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const [isError, setIsError] = useState (false);

  useEffect (() => {
    setVideoInfo([]);
    setIsLoading(true)
    axios
    .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
    .then(response => {
      createVideInfo(response.data['items'][0]);
      setIsError(false)
    })
    .catch (error => {
      console.log(error)
      setIsError(true)
    })
  },[videoId])

  async function createVideInfo(video) {
 const snippet = video.snippet;
 const stats = video.statistics;
 const channelId = snippet.channelId;
 const response = await axios
                 .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
  const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
  const subs = response.data.items[0].statistics.subscriberCount;
  const publishedDate = new Date(snippet.publishedAt).toLocaleDateString('en-GB', {  
                                                          day : 'numeric',
                                                          month : 'short',
                                                          year : 'numeric'
      
                                                 });  
  const title = snippet.title; 
  const description = snippet.description;
  const channelTitle = snippet.channelTitle;
  const viewCount = stats.viewCount;
  const likeCount = stats.likeCount;
  const dislikeCount = stats.dislikeCount;

  setVideoInfo({
      title,description,channelTitle,
      viewCount,likeCount,dislikeCount,
      channelImage,publishedDate,subs
    });
setIsLoading(false);
  }

  if (isError) {
    return <Alert severity="error" className='loading'> No Result Found! </Alert>
  }

  return (
    <div className='videoplayer'>
     <div className='videoplayer--details'>
      <div className='videoplayer--videos'>
        {isLoading ? <CircularProgress className='loading' color="secondary"/> : <Video videoId = {videoId}/>}
      </div>
      <div className='videoplayer--videocontent'>
                    {!isLoading ? <VideoContent
                                    title={videoInfo.title}
                                    description={videoInfo.description}
                                    publishedDate={videoInfo.publishedDate}
                                    channelTitle={videoInfo.channelTitle}
                                    channelImage={videoInfo.channelImage}
                                    viewCount={videoInfo.viewCount}
                                    likeCount={videoInfo.likeCount}
                                    dislikeCount={videoInfo.dislikeCount}
                                    subs={videoInfo.subs}
                                  /> : null
                    }
                </div>
                </div>
            <div className='videoplayer--suggested'>
                <RecommendedVideos />
            </div>
     </div>
  )
}

export default VideoPlayer