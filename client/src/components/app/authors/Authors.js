import React from 'react';
import { Avatar} from 'antd';
import './Author.css';

const Authors = () => {
  return (
    <div className='flex-1 flex items-center justify-end'>
        <Avatar.Group
      maxCount={4}
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Avatar src="https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Avatar src="https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Avatar src="https://images.unsplash.com/photo-1571310100246-e0676f359b42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </Avatar.Group>
    </div>
  )
}

export default Authors