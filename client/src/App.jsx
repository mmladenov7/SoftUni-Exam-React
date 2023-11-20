import { Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import Register from "./components/Authentication/Register/Register"
import Login from "./components/Authentication/Login/Login"
import Footer from "./components/Footer/Footer"
import CreatePost from "./components/Cars/CreatePost"
import AllPosts from "./components/Cars/Posts/All_Posts/AllPosts"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
