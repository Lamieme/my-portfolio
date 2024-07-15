import { Route, Routes } from 'react-router-dom'
import Board from './pages/Boards/_id'
import Footer from './components/Footer'
import { Container } from '@mui/material'
import { useState } from 'react'
import AppBar from './components/AppBar'
import Profile from './pages/Profile'
import Catalog from './pages/Catalog/_id'
import RouterComponent from './routes'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('primary.main')
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: 'auto',
        backgroundColor: backgroundColor,
        px: '80px', //lùi 2 bên trái phải
        py: '100px'//lùi 2 bên trên dưới
      }}>
      {/* header */}
      {/* <AppBar /> */}
      {/* <Routes>
        <Route path='*' element={<Board backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />} />
        <Route path='land' element={<Board backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />} />
        <Route path='profile' element={<Profile backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />} />
        <Route path='catalog' element={<Catalog backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />} />
      </Routes> */}
      {/* footer */}
      <RouterComponent backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
      {/* <Footer /> */}
    </Container>
  )
}

export default App
