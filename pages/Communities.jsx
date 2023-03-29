import React from 'react'
import CardCommunities from '../components/CardCommunities'
import CardDetail from './../components/CardDetail';
import CardRequest from './../components/CardRequest';

const Communities = () => {
  return (
    <div className=' flex flex-col lg:grid lg:grid-cols-1 gap-4 lg:px-20    py-20 '>
      <CardCommunities/>
      <CardCommunities/>
      <CardDetail/>
      <CardRequest/>
    </div>
  )
}

export default Communities
