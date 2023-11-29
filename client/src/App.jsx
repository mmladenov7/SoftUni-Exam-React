import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"

import Header from "./components/Header/Header"
import Register from "./components/Authentication/Register/Register"
import Login from "./components/Authentication/Login/Login"
import Footer from "./components/Footer/Footer"
import CreatePost from "./components/Cars/CreatePost"
import AllPosts from "./components/Cars/Posts/All_Posts/AllPosts"
import PostDetails from "./components/Cars/Posts/Post_Details/PostDetails"


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/:_id" element={<PostDetails />} />
          <Route path="/posts/create" element={<CreatePost />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
