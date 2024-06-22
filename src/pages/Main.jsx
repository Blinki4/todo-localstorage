import React from 'react'
import CustomBtn from '../components/UI/CustomButton/CustomBtn'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Main() {
  return (
    <div className="hero">
      <Navbar />

      <div className="hero__content">
        <h1 className="hero__title">To do</h1>
        <Link to="/todo">
          <CustomBtn>start</CustomBtn>
        </Link>
      </div>
    </div>
  )
}
