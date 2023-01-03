import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import axios from 'axios';
import Channel from '../ChannelPage/Channel';
import ChannelVideos from '../ChannelVideos/ChannelVideos';
import {Link} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import TuneIcon from '@mui/icons-material/Tune'
import { CircularProgress } from '@mui/material';
import './Search.css';


const Search = () => {
  let { searchQuery } = useParams();
    
  const [channelRow, setChannelRow] = useState('');
  const [videoRows, setVideoRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setChannelRow('');
    setVideoRows([]);
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&type=channel&q=${searchQuery}&safeSearch=none&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
      .then(response => {
        createChannelRow(response.data['items'][0]);
      })
      

      axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${searchQuery}&safeSearch=none&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
      .then(response => {
        console.log(response.data['items'])
        createVideoRows(response.data['items']);
        setIsError(false);
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      })

  }, [searchQuery])


  async function createChannelRow(channel) {
    const channelId = channel.id.channelId;
    const response = await axios
                            .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
    const noOfVideos = response.data.items[0].statistics.videoCount;
    const subs = response.data.items[0].statistics.subscriberCount;
    const snippet = channel.snippet;
    const title = snippet.title;
    const description = snippet.description;
    const image = snippet.thumbnails.medium.url;
    //console.log(response.data.items)
    setChannelRow({
      channelId,
      image,
      title,
      subs,
      noOfVideos,
      description
    });
  }

  async function createVideoRows(videos) {
    let newVideoRows = [];
    for (const video of videos) {
      const videoId = video.id.videoId;
      const response = await axios
                              .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
      const views = response.data.items[0].statistics.viewCount;
      const snippet = video.snippet;
      const title = snippet.title;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channel = snippet.channelTitle;
      const description = snippet.description;
      const image = snippet.thumbnails.medium.url;
      const channelId = snippet.channelId
      //const data = await axios
                           // .get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyBN8E80qUWH5HlF2zBGj-hme5uCQwOjNHI`)
  //const channelImage = data.data.items.snippet.thumbnails.medium.url;
      //console.log(response.data.items)
                          
      newVideoRows.push({
        videoId,
        title,
        image,
        views,
        timestamp,
        channel, 
        description
      });
    };
    setVideoRows(newVideoRows);
    setIsLoading(false);
  }
  if (isError) {
    return <Alert severity="error" className='loading'>No Results found!</Alert>
  }
return (
  <>
  <div className="searchpage">
            <div className="searchpage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <hr />
            { !isLoading ? <Channel 
                                  key={channelRow.channelId}
                                  image={channelRow.image}
                                  channel={channelRow.title}
                                  subs={channelRow.subs}
                                  noOfVideos={channelRow.noOfVideos}
                                  description={channelRow.description}
                                  channelImage = {channelRow.channelImage}
                            /> : null
            }
            <hr />
            
            {
              videoRows.map(item => {
                return (
                           <Link key={item.videoId} to={`/watch/${item.videoId}`} style={{textDecoration:'none'}}>
                          <ChannelVideos
                            title={item.title}
                            image={item.image}
                            
                            views={item.views}
                            timestamp={item.timestamp}
                            channel={item.channel}
                            description={item.description}
                          
                          />
                          </Link>
                )
              })
              
            }   
            
        </div>
  </>
)
}

export default Search;