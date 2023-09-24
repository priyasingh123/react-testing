//uplers assessment 
import React,{  Fragment,useState, useEffect} from 'react' ;
function Solution() {
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)
  const [min, setMin] = useState('00')
  const [sec, setSec] = useState('00')
  const [go, setGo] = useState(false)

  useEffect(() => {
    const timer = go ? setInterval(() => {
      setSec(prevSec => {
        if (prevSec === `00`) {
          setMin(prevMin => {
            return prevMin-1 <= 0? `0${prevMin-1}`: prevMin-1
          })
          return 59
        }
        else if (prevSec-1 < 10) {
          return `0${prevSec-1}`
        }
        return prevSec - 1
      });
    }, 1000) : null;

    return () => { clearInterval(timer)}
  },[go])

  const handleStart = () => {
    let mod = secs % 60
    let inc = Math.floor(secs / 60)
    let secVar = secs < 60 ? secs : mod
    let minVar = mins + inc
    minVar < 10 ? setMin(`0${minVar}`) : setMin(minVar)
    secVar < 10 ? setSec(`0${secVar}`) : setSec(secVar)
    // setMin(parseInt(minVar))
    // setSec(parseInt(secVar))
    setGo(true)
  }

  const handleReset = () => {
    setMin('00')
    setSec('00')
    setGo(false)
  }

  const handlePauseResume = () => {
    setGo(!go)
  }

  return (
    <Fragment>
      <label>
        <input type="number" onChange={e => setMins(parseInt(e.target.value))} val={parseInt(mins)} />
        Minutes
      </label>
      <label>
        <input type="number" onChange={e => setSecs(parseInt(e.target.value))} val={parseInt(secs)} />
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePauseResume}  >PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <h1 data-testid="running-clock">{min}:{sec}</h1>
    </Fragment>
  );
}

export default Solution;
