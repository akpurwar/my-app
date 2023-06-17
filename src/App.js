import logo from './logo.svg';
import './App.css';
import Issue from './components/Issue';
import * as React from "react";
import { useState , useEffect } from 'react';

import axios from "axios";
import Header from './components/Header';


function App() {
  const [Issuedata ,setAlldata] = React.useState([])
  const [page, setPage] = useState(1);

  

  React.useEffect(()=> {
  axios.get(`https://api.github.com/repos/facebook/react/issues?page=${page}`).then((res)=>   setAlldata((prev) => [...prev, ...res.data]))
  },[page])


  const handelInfiniteScroll = async () => {

    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
       
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);


  return (
   <div className='container'>
<Header/>
   {Issuedata.map((issue)=> (
 <Issue issue={issue} />
   ))}

    
   </div>
  );
}

export default App;
