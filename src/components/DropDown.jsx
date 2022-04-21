import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({isOpen , toggle}) => {
  return (
    <div className={isOpen ?'grid grid-rows-4 text-center bg-yellow-300' : 'hidden' }
    onClick={toggle}
    >
          <Link className="p-4" to="/">Home</Link>
  <Link className="p-4" to="/menu">menu</Link>
  <Link className="p-4" to="/about">About</Link>
  <Link className="p-4" to="/contact">Contact</Link>
    </div>
  )
}

export default DropDown