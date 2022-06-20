// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const inputField = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = () => {
    const value = inputField.current.value
    setUsername(value.toLowerCase())
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input name="username" type="text" ref={inputField} onChange={handleChange} value={username}/>
        </div>
        <button type="submit">Submit</button>
      </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
