import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import {Avatar} from '@mui/material'
import {DateTime} from 'luxon';
import moment from 'moment'
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined';
import './Comment.css';

function Comment() {
    const [showButtons, setShowButtons] = useState(true);
    const [comment,setComment] = useState('');
    const [addComment,setAddComment] = useState([])
    let date = DateTime.now;

    const handleButtons = () => {
        setShowButtons(prev => !prev)
    }
    const handleChange =(e)=> {
        setComment(e.target.value)
    }
 const newComment = () => {
setAddComment(addComment => [...addComment,comment])
console.log('clicked')
setComment('')
    
 }
    return (
        <div className='comment--section'>
            {showButtons ?(
            <section>
             <div className='comment--info'>
                <img src='../images/avatar1.png' alt='' className='comment--img'/>
                <input type='text' 
                placeholder='Add Comment' 
                className='comment--input'
                onClick={handleButtons}
                />
            </div> 
            </section>) : (
                <section>
            <div>
            
            
                 
                <div>
                    <p>Commenting as</p>
                    <div>
                <img src='../images/avatar1.png' alt='' className='comment--img'/>
                <p>Yeesha Dev</p>
                </div>
                </div>
                
                <input
                type='text' 
                placeholder='Add Comment' 
                value={comment}
                onChange = {handleChange}
                className='comment--input'/>
                <div className='comment--btn'>
                <button onClick={newComment}>Comment</button>
                <button onClick={handleButtons} className='btn--cancel'>Cancel</button>
                </div>
                
            </div>
            <div className='add--comment'>
            
            {addComment.map((text,index)=> {
                    return (
                        <div id={index }>
                            <div className='flex'>
                            <Avatar/>
                 <h4>Aisha</h4>
                <p className='timestamp'>{moment().startOf('hour').fromNow() }</p>
                </div>
                            <p className='comment'>{text + index}</p>
                            <div className='bottom--flex'>
                            <span title='Like'>
                                <ThumbUpIcon/>
                            </span>
                            <span title='Dislike'>
                                <ThumbDownIcon/>
                            </span>
                             <p>Reply</p>
                             </div>
                             
                        </div>
                    )
                })}
                </div>
            </section>)}
        </div>
    )
}

export default Comment
