import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FileManager = () => {
  return (
    <div>
        <h1>FileManager</h1>
        <Link to="settings/profile">Profile</Link>
        <Outlet/>
    </div>
  )
}

export default FileManager