import React, { useEffect, useState } from 'react' // import React Component
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
import Post from './components/WritePost'
import { app, database } from './firebase-config' // eslint-disable-line
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set, get } from 'firebase/database'
import { ToastContainer, toast } from 'react-toastify'
import hash from 'object-hash'
import 'react-toastify/dist/ReactToastify.css'
import PostsList from './components/PostsList'

function App () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [databaseSnapshot, setDatabaseSnapShot] = useState([])
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
  const [ulImage, setImage] = useState('')
  const [ulPrice, setPrice] = useState('')
  const [ulLatitude, setLatitude] = useState('')
  const [ulLongitude, setLongitude] = useState('')
  const [ulDetails, setDetails] = useState('')
  const [ulAddress, setAddress] = useState('')

  const handlePost = () => {
    const post = { image: ulImage, address: ulAddress, price: ulPrice, lat: ulLatitude, lng: ulLongitude, details: ulDetails }
    console.log(post)
    const postID = getHash(post)
    console.log(postID)
    set(ref(database, 'posts/' + postID), post)
      .then(() => { handleQuerryDatabase() })
  }
  // https://firebase.google.com/docs/database/web/read-and-write?authuser=0#web-version-9_1
  const handleQuerryDatabase = () => {
    const databaseTemp = []
    get(ref(database, 'posts'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const info = childSnapshot.val()
            databaseTemp.push(PostsList(info.price, info.address, info.image, info.details, info.lat, info.lng))
          })
          setDatabaseSnapShot(databaseTemp)
          return databaseSnapshot
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
    return databaseSnapshot
  }
  // database authentication https://youtu.be/PUBnlbjZFAI

  function getHash (post) {
    return hash(post)
  }
  useEffect(() => {
    handleQuerryDatabase(() => {
    })
  }, []); // eslint-disable-line

  return (
    <div id='home-page'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listings' element={<Listings currentListings={() => handleQuerryDatabase()} post={() => getPostObject()} />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<LoginPopup setEmail={setEmail} setPassword={setPassword} handleAction={(id) => handleAction(id)} />} />
        <Route path='/post' element={getPostObject()} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  )
  function getPostObject () {
    return <Post setAddress={setAddress} setImage={setImage} setPrice={setPrice} setLatitude={setLatitude} setLongitude={setLongitude} setDetails={setDetails} handleAction={() => handlePost()} />
  }
}

export default App
