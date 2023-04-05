import React, { useState } from 'react'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import Header from './components/Header/Header'

function App() {
  const [keyword, setKeyword] = useState('goku')

  return (
    <>
      <Header setKeyword={setKeyword}/>
      <main>
        <ListOfGifs keyword={keyword}/>
      </main>
    </>
  )
}

export default App
