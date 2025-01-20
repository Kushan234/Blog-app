import React, { useEffect, useState } from 'react'
import CommentsForm from './CommentsForm'
import { getCommentsData } from '../../data/comment'
import Comment from './Comment';


const CommentsContainer = ({className, logginedUserId}) => {

    const [comments, setComments] = useState([]);
    const mainComments = comments.filter((Comment) =>Comment.parent === null);

    console.log(comments);

    useEffect (()=>{
        (async()=>{
          const commentData = await getCommentsData();
          setComments(commentData);
        })();
    },[]);
    

    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: "10",
            user: {
              _id: "a",
              name: "Mohammad Rezaii",
            },
            desc: value,
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        };
        setComments((curState)=>{
          return [newComment, ...curState];
        })
    };
  return (
    <div className={`${className}`}>
        <CommentsForm btnLabel="Send"
        formSubmitHandler={(value)=>addCommentHandler(value)}
        />
        <div className="mt-8 space-y-4">
          {
            mainComments.map((comment)=>(
             <Comment comment={comment} logginedUserId={logginedUserId}/>
             
            ))
          }
        </div>
    </div>
  )
}

export default CommentsContainer