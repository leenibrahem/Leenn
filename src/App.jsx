import React from 'react'
import Spam from './Components/Spam/Spam'
import CallHistory from './Components/CallHistory/CallHistory'
import Accounts from './Components/Accounts/Accounts'

const App = () => {
  return (
    <div>
       <Accounts></Accounts>
      <Spam></Spam>
      <CallHistory></CallHistory>
     
    </div>
  )
}

export default App