import { useState } from "react"

function App() {

  let [increment, setIncrement] = useState(1)
  let [passShow, setPassShow] = useState(true)
  // let [countErr, setCountErr] = useState("")
  // let [minusErr, setMinusErr] = useState("")

  let handleClick = () =>{
    // if(increment >= 10){
    //   countErr = '*Number greater than 10 are not allow'
    //   setCountErr(countErr)
    // }else{
    //   minusErr = ''
    //   setMinusErr(minusErr)
    // }
    increment++
    setIncrement(increment)
  }

  let handleDecrement = () =>{
    // if(increment <= 0){
    //     minusErr = '*minus value not allow'
    //     setMinusErr(minusErr)
    // }else{
    //   countErr = ''
    //   setCountErr(countErr)
    // }
    increment--
    setIncrement(increment)
  }
  
  let handlePassShow = () => {
    if(passShow){
      setPassShow(false)
    }else{
      setPassShow(true)
    }
  }

  return (
    <>
      <div className="container">
        {
          increment >= 10
          ?
          <div>
            <button className="disable">increment</button>
            <p className="countErr">*Number greater than 10 are not allow</p>
          </div>
          :
        <button onClick={handleClick}>increment</button>
        }

        <p className="count">count: {increment} </p>

        {
          increment <= 0
          ?
          <div>
            <button className="disable">decrement</button>
            <p className="minusErr">*minus value not allow</p>
          </div>
          :
          <button onClick={handleDecrement}>decrement</button>
        }

        <input type={passShow ? 'password' : 'text'} placeholder="password"/>
        <button className="passBtn" onClick={handlePassShow}>{passShow ? 'Show' : 'Hide'}</button>
        
      </div>
    </>
  )
}

export default App
