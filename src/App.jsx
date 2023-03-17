import React from 'react'
import styled from 'styled-components';
import Header from './Component/Header';


const StyledComponent = styled(Header)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  h1:{
    color:({colored})=>colored,
  },
  ".h2":{
    color:"purple"
  },
  ".search":{
    color: 'blue',
  }
})

const App = () => {
  return (
  <>
  {/* Waqar */}
    <StyledComponent colored='red'></StyledComponent>

   {/* Muff.. */}
    <StyledComponent colored='purple'></StyledComponent>
  </>
  )
}

export default App;