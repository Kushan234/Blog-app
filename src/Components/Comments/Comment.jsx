import React from 'react'
import { images } from '../../Constants'
import { FiMessageSquare, FiEdit2,FiTrash } from 'react-icons/fi'

const Comment = ({comment, logginedUserId}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;

  return (
    <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
      <img src={images.PostProfileImage} alt="user profile" className='object-cover rounded-full w-9 h9' />

      <div className="flex flex-col flex-1">
        <h5 className='text-xs font-bold text-dark-hard'>{comment.user.name}</h5>
        <span className='text-xs text-dark-light'>     
          {
                    new Date(comment.createdAt).toLocaleDateString("en-US",{
                    day:"numeric",
                    month:"short",
                    year:"numeric",
                    hour:"2-digit",
                  })}
         </span>
         <p className="font-opensans mt-[10px] text-dark-light">{comment.desc}</p>
        
         <div className="flex items-center mt-3 mb-3 text-sm gap-x-2 text-dark-light font-roboto">
          {isUserLoggined && ( <button className="flex items-center space-x-2">
            <FiMessageSquare />
            <span className="">Reply</span>
          </button>)}
         
         {commentBelongsToUser &&(
          <>
           <button className="flex items-center space-x-2">
            <FiEdit2 />
            <span className="">Edit</span>
          </button>
          <button className="flex items-center space-x-2">
            <FiTrash />
            <span className="">Delete</span>
          </button>
          </>
         )}
         </div>
      </div>
    </div>
   
  )
}

export default Comment