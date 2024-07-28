import { useState } from 'react';
import Card from "./card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>learn react</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      
      </>
  )
}

export default App
