import React from 'react'
import SearchBar from '../components/SearchBar'
import { useSelector } from 'react-redux'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const Home = () => {

  const {query} = useSelector((store)=>store.search)

  return (
    <div>
      <SearchBar />

      {
        query!= '' ? <div>
          <Tabs/><ResultGrid/>
        </div> :''
      }
    </div>
  )
}

export default Home
