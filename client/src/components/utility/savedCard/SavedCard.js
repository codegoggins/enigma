import React from 'react';
import { Link } from 'react-router-dom';

const SavedCard = ({ blog }) => {
  return (
    <Link to={`/${blog?._id}`}>
      <div className='min-w-[15rem] p-1 py-6 cursor-pointer'>
        <div className='h-[18rem] w-full overflow-hidden rounded-[1.5rem] relative'>
          <img
            className='object-cover w-full h-full'
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            src={blog?.photo}
            alt="card-img"
            loading="lazy" // Lazy loading added here
          />
          <div className='p-1 hover:scale-[1.05] bg-white hover:bg-opacity-[40%] bg-opacity-[20%] absolute bottom-4 left-4 h-[3rem] w-[3rem] rounded-full flex items-center justify-center overflow-hidden cursor-pointer'>
            <img
              className='object-cover w-full h-full rounded-full'
              src={blog?.author?.photo}
              alt="profile-img"
              loading="lazy" // Lazy loading added here
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SavedCard;
