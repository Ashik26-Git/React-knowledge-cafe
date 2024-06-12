import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const handleBookmarks = blog =>{
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

  return (
    <>
      <Header></Header>
      <div className='mx-5 flex gap-6'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
