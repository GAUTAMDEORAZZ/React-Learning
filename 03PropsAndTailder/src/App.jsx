import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Page from './Components/Page'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Card name="Gautam" role="Java Developer"/>
<Card name="Aditi" role="Manager"/>
<Card name="Spana" />
<Card  />
<Header />
<Page />
 <Footer />

    </>
  )
}

export default App
