import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageContainer from '../../components/messages/MessageContainer.jsx'

const Home = () => {
  return (
    <div className='flex h-[600px] md:h-[550px] rounded-lg overflow-hidden 
    shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home