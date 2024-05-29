import './App.css'
import Card from './Components/Card'
import Menu from './Components/Menu'
import Update from './Components/Update'
import Slider from './Components/Silder'
import Propes from './Components/Propes'
import Friend from './Components/Friend'
import FriendHandler from './Components/FriendHandler'
import Music from './Components/Music_App/Music'
import MusicHandler from './Components/Music_App/MusicHandler'

import { useState } from 'react'

function App() {

  return (
    <>
      {/* <Menu /> */}
      {/* <Card /> */}
      {/* <Update /> */}
      {/* <Slider /> */}

      {/* <Propes text= "Docs" color= "bg-blue-500" /> */}
      {/* <Propes text= "Installation" color= "bg-red-300" /> */}
      {/* <Propes text= "Error Handling" color= "bg-green-500" /> */}
      
      {/* <FriendHandler /> */}

      {/* <Music /> */}

      <MusicHandler />
    </>
  )
}

export default App;
