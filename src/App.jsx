import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarkes/Bookmarkes'
import Header from './Components/Header/Header'




function App() {
  const [bookmarkes, setBookmarkes] = useState([]);
  const [readingTime, setReadingTime] = useState(0)
 


 const handleAddToBookmarkes = blog =>{
  const newBookmarkes = [...bookmarkes, blog];
  setBookmarkes(newBookmarkes);

 }

 const handleMarkeRead = time =>{
  const newRedingTime  = readingTime + time;
  setReadingTime(newRedingTime);
  
 }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmarkes={handleAddToBookmarkes} handleMarkeRead={handleMarkeRead}></Blogs>
      <Bookmarkes bookmarkes= {bookmarkes} readingTime={readingTime}></Bookmarkes>
      </div>
      
     
      
    </>
  )
}

export default App
