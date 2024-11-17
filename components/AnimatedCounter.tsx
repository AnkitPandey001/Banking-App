"use client"
import CountUp from 'react-countup';
const AnimatedCounter = ({balance}:{balance:number}) => {
  return (
    <div>
      <CountUp 
      duration={2.75}
      decimals={2}
      decimal='.'
      prefix='Rs. '
      end={balance}/>
    </div>
  )
}

export default AnimatedCounter
