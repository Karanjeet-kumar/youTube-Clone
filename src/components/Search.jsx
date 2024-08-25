import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchData } from "../utils/rapid_api"
import Sidebar from "./Sidebar"
import SearchCard from './SearchCard';

function Search() {
  const {result, setResult}=useState();
  const {searchQuery}=useParams();

  useEffect(()=>{
    fetchSearchResults()
  }, [searchQuery])

  const fetchSearchResults =()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents}) => {
      console.log(contents);
      setResult(contents);
    })
  } 

  return (
    <div>
      <div className='mt-24 flex-row]'>
        <Sidebar />
        <div className='h-[calc(100vh-3.325rem)] overflow-y-scroll overflow-x-hidden'>
          <div className='grid grid-col-1 gap-2 p-2'>
            {result?.map((item, index)=>{
              if(item?.type!=="video") return false;
              return <SearchCard key={index} video={item?.video} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search