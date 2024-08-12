import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarImage } from './ui/avatar'

const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    // console.log(job)
    return (
        <div 
        onClick={() => navigate(`/description/${job._id}`)} 
        className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'
      >
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>{job?.company?.location}</p>
          </div>
          <div className='flex-shrink-0'>
            <Avatar>
              <AvatarImage src={job?.company?.logo}  />
            </Avatar>
          </div>
        </div>
      
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      
        <div className='flex items-center gap-2 mt-4'>
          <Badge className='text-blue-700 font-bold' variant="ghost">
            {job?.position} Positions
          </Badge>
          <Badge className='text-[#F83002] font-bold' variant="ghost">
            {job?.jobType}
          </Badge>
          <Badge className='text-[#7209b7] font-bold' variant="ghost">
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
    )
}

export default LatestJobCards