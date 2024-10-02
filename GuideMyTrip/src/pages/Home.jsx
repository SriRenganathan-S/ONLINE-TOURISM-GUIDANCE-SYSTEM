import React from 'react'
import Searchcontainer from '../Containers/searchcontainer'
import Aboutcontainer from '../Containers/Aboutcontainer'
import Yearcontainer from '../Containers/Yearcontainer'
import SeasonContainer from '../Containers/SeasonContainer'

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Searchcontainer/>
      <Aboutcontainer/>
      <Yearcontainer/>
      <SeasonContainer/>
    </div>
  )
}

export default Home