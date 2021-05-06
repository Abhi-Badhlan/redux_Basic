import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {incNum , decNum} from './actions/index'

import './App.css';

const App=()=> {
const myState=useSelector((state)=> state.redu);
const dispatch=useDispatch()
  return (
  <>
    <div className='container'>
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React-Redux</h4>
       <div className='quantity'>
         <button className='btn btn-danger' onClick={()=>{dispatch(decNum())}}>-</button>
          <input  type='text' value={myState} />
         <button className='btn btn-success' onClick={()=>dispatch(incNum())}>+</button>
         </div>    

    </div>
  </>
  );
}

export default App;
