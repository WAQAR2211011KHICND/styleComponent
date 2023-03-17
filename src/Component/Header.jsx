import React from 'react'

const Header = (props) => {
  return (
  <div className={props.className}>
    <h1 className='h1'>Youtube</h1>
    <h1 className='h2'>You..2</h1>
    <div className='search'>SeachBox</div>
    <div className='logo'>Logo</div>
  </div>
  )
}

export default Header