import React from 'react'

import Greeter from './Greeter'

export const App = () => {
  return (
    <div>
      <Greeter
        name={'Mateusz'}
      />
      <Greeter
        name={123}
      />
      <Greeter />
    </div>
  )
}

export default App
