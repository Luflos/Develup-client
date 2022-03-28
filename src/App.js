import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'
import Category from './components/pages/Category'
import Error from './components/pages/Error'
import Navbar from './components/layout/Navbar'
import Decks from './components/pages/Decks'
import axios from 'axios';


function App() {
  // state with the user data when the user is logged in  
  // useState is null because there is no logged in user yet.
const [currentUser, setCurrentUser] = useState(null)

const [category, setCategory] = useState([])

// useEffect to get all of the categories from the backend
useEffect(() => {
  axios.get(process.env.REACT_APP_SERVER_URL + "/api-v1/category")
    .then((response) => {
      setCategory(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
}, [])



  // useEffect that handles localstorage if the user navigates away from the page or refreshes
useEffect(() => {
  const token = localStorage.getItem('jwt_token')
  // if a token is found -> Log the user in OTHERWISE make sure they are logged out
if (token) {
  setCurrentUser(jwt_decode(token))
} else {
  setCurrentUser(null)
}
}, [])

//Logout handler function that deletes a token from the localstorage
const handleLogout = () => {
  // remove the token from the localstorage
  if (localStorage.getItem('jwt')) localStorage.removeItem('jwt');
  // set the userState to be null so that user is logged out
  setCurrentUser(null)
}
  return (
    <Router>
      <Navbar handleLogout={handleLogout} currentUser={currentUser}/>
      <div>
        <Navbar currentUser={currentUser}/>
        <Routes>
          {/* PATH to landing page (Landing page will be the login page) */}
          <Route 
            path="/"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />

          {/* Path TO REGISTER */}
          <Route 
            path='/signup'
            element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />

          {/* Path TO CATEGORIES */}
          <Route 
            path='/category'
            element={<Category category={category} setCategory={setCategory}/>}
          />

          <Route 
            path='/category/:id'
            element={<Decks category={category}/> }
          />

          {/* Path TO USER'S PROFILE */}
          <Route 
            path="/profile"
            element={<Profile/>}
          />

          <Route 
            path="*"
            element={<Error />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
