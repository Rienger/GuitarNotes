import React, {useState, useEffect} from 'react'
import dot from './images/dot.png'

function Guitar(props) {

  const [initializeRestart, setinitializeRestart] = useState(false)
  const [stringOne, setStringOne] = useState(false)
  const [stringTwo, setStringTwo] = useState(false)
  const [stringThree, setStringThree] = useState(false)
  const [stringFour, setStringFour] = useState(false)
  const [stringFive, setStringFive] = useState(false)
  const [stringSix, setStringSix] = useState(false)


  // useEffect(()=>{
  //   props.initializer
  // },[initializeRestart])

  
  const restart = () => props.initializer()

 

  const s1 = () => {
    setStringOne(!stringOne) 
  }

  const s2 = () => {
    setStringTwo(!stringTwo) 
  }

  const s3 = () => {
    setStringThree(!stringThree) 
  }

  const s4 = () => {
    setStringFour(!stringFour) 
  }

  const s5 = () => {
    setStringFive(!stringFive) 
  }

  const s6 = () => {
    setStringSix(!stringSix) 
  }

   






  return (
    <div>

   
    <div className='fret'>
        <div className='string' onClick={s1}>
        {stringOne ? <img src={dot} alt=''></img> : ''}
        </div>

        <div className='string' onClick={s2}>
        {stringTwo ? <img src={dot} alt=''></img> : ''}
        </div>

        <div className='string' onClick={s3}>
        {stringThree ? <img src={dot} alt=''></img> : ''}
        </div>

        <div className='string' onClick={s4}>
        {stringFour ? <img src={dot} alt=''></img> : ''}
        </div>

        <div className='string' onClick={s5}>
        {stringFive ? <img src={dot} alt=''></img> : ''}
        </div>

        <div className='string' onClick={s6}>
        {stringSix ? <img src={dot} alt=''></img> : ''}
        </div>
       
    </div>


        

    </div>
  )
}

export default Guitar