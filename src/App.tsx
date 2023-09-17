import { useState } from 'react'
import './App.css'
import ImagesGrid from './components/ImagesGrid/ImagesGrid'
import SearchBar from './components/SearchBar/SearchBar'
import { Image } from './types/image'



function App() {

  const [images, setImages] = useState<Image[] | null>(null)

  return (
    <>
      <header>
        <SearchBar setImages={setImages} />
      </header>
      <main>
        <ImagesGrid images={images} />
      </main>
    </>
  )
}

export default App
