import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Joinform from './Components/Joinform'
import Footer from './Components/Footer'

function App() {
 
  return (
<>
    <Navbar/>
    <Hero/>
    <Joinform/>
    <Footer/>

    {/* <div className='w-10 h-10 bg-red-600'> */}

    {/* </div> */}
</>
  )
}

export default App
