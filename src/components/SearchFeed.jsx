import React from 'react';
import {useState,useEffect} from 'react';
import {Box,Typography} from "@mui/material";
import {Videos} from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  
  const[videos,setVideos]=useState([]);
  const{searchTerm}=useParams();

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))

  },[searchTerm]);


  return (
      <Box p={2} sx={{height:{sx:"auto",md:"92vh"},overflowY:'auto',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search Results for:  <span style={{color:'#F31503'}}>{searchTerm}</span> videos
        </Typography>

         <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
         <Videos videos={videos} />
        
      </Box>
      </Box>
  )
}

export default SearchFeed;

