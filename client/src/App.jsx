import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import { ErrorProvider } from "./contexts/ErrorContext"

import Header from "./components/Header/Header"
import Register from "./components/Authentication/Register/Register"
import Login from "./components/Authentication/Login/Login"
import Footer from "./components/Footer/Footer"
import AllPosts from "./components/Cars/Posts/All_Posts/AllPosts"
import PostDetails from "./components/Cars/Posts/Post_Details/PostDetails"
import Profile from "./components/Profile/Profile"
import EditPost from "./components/Cars/Posts/EditPost/EditPost"
import HomePage from "./components/HomePage/HomePage"
import Error from "./components/Error/Error"
import CreatePost from "./components/Cars/Posts/Create_Post/CreatePost"
import NotFound from "./components/Not_Found/NotFound"


function App() {
  return (
    <>
      <ErrorProvider>
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Error />
        </AuthProvider>
      </ErrorProvider>
    </>
  )
}

export default App
