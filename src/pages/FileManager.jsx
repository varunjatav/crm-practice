import React from 'react'
import { Outlet } from 'react-router-dom'


const FileManager = () => {
  return (
    <div>
        <h1>FileManager</h1>
      <Outlet/>
    </div>
  )
}

export default FileManager