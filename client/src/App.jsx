import { useState } from 'react'

function App() {
  const [visibility, setVisility] = useState(true)

  const toogleDiv = () => {
    setVisility(!visibility);
  }

  return (
    <div>
      {visibility && (
       <div id='myDiv'>
          <p>Hello world</p>
      </div>
    )}
    <button onClick={toogleDiv}>Togle Div</button>
    </div>
  );
} 

export default App;