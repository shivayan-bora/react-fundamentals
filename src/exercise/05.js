// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// While Spreading props make sure to check how to put your properties, because in the event of conflict, the property that comes later is the one that overrides the others.
const Box = ({style, size='', ...otherProps}) => {
  const boxSizeClassName = size ? `box--${size}` : ''
  return <div className={`box ${boxSizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>
}


const smallBox = <Box style={{backgroundColor: 'lightblue'}} size='small'>small lightblue box</Box>
const mediumBox = <Box style={{backgroundColor: 'pink'}} size='medium'>medium pink box</Box>
const largeBox = <Box style={{backgroundColor: 'orange'}} size='large'>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
