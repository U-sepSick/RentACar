import './App.css'

import { Route, Routes } from 'react-router-dom'

const Home = () => <h1>Home</h1>

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}

export default App
