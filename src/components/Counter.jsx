import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]" >
      <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
      onClick={() => dispatch(increment())}
      >
        +
      </button>
      
      <div className="font-bold gap-12 text-5xl">{count}</div>

      <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
      onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  )
}

export default Counter
