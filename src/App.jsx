

import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarkes/Bookmarkes'

import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarkes></Bookmarkes>
      </div>
      
     
      
    </>
  )
}

export default App
