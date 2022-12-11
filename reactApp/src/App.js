import React, { useState } from 'react' // import React Component
import './css/stylesheet.css'
import './css/navbar.css'
import './css/flex-style.css'
import './css/listing-style.css'
import './css/about-style.css'
import Home from './components/Home'
import Listings from './components/Listings'
import About from './components/About'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { Header, Footer } from './components/GeneralDetails'
import LoginPopup from './components/LRForm'
import { app } from './firebase-config' // eslint-disable-line
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleAction = (id) => {
    const authentication = getAuth()
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          window.location.reload()
        })
        .catch((error) => {
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email')
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          window.location.reload()
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use')
          }
        })
    }
  }

  // useEffect(() => {
  //   const authToken = sessionStorage.getItem('Auth Token')
  // }, [])

  return (
    <div id='home-page'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPopup setEmail={setEmail} setPassword={setPassword} handleAction={(id) => handleAction(id)}/>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  )

}

export default App
