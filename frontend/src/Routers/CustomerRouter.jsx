import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Edit from '../Component/edit'
import Gallery from '../Component/gallery'



const CustomerRouter = () => {
  return (
    <div>
        <div>
        </div>
      <Routes>
        <Route path={'/'} element={<Edit/>}></Route>
        <Route path={'/gallery'} element={<Gallery/>}></Route>
       

      </Routes>
      <div>
      </div>
    </div>
  )
}

export default CustomerRouter
