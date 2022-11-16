import React from 'react'
import { useObserver } from 'mobx-react'
import useStore from '../useStore'

const Counter = () => {
  const { counter } = useStore()

  const increase = () => {
    counter.increase()
  }

  const decrease = () => {
    counter.decrease()
  }

  return useObserver(() => (
    <div>
      <h2>Count is : {counter.number}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  ))
}

export default Counter
