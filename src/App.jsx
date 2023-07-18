import { useEffect } from "react"
import { useState } from "react"

const App = () => {
  const [count,setCount] = useState(0)

 

  useEffect(()=>{
   const intervalID =  setInterval(()=>{
    //setCount(count + 1)
    setCount(state => state +1)
  },1000)

    return () => clearInterval(intervalID)
  },[])

  return (
    <div>
      <h1>Valeur du compter : {count}</h1>
    </div>
  )
}
export default App
