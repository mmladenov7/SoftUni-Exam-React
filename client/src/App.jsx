import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"

import Header from "./components/Header/Header"
import Register from "./components/Authentication/Register/Register"
import Login from "./components/Authentication/Login/Login"
import Footer from "./components/Footer/Footer"
import CreatePost from "./components/Cars/CreatePost"
import AllPosts from "./components/Cars/Posts/All_Posts/AllPosts"
import PostDetails from "./components/Cars/Posts/Post_Details/PostDetails"
import Profile from "./components/Profile/Profile"
import EditPost from "./components/Cars/Posts/EditPost/EditPost"
import HomePage from "./components/HomePage/HomePage"


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="users/:_id" element={<Profile />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:_id" element={<PostDetails />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/:_id/edit" element={<EditPost />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
