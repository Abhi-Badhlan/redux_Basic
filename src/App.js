import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {incNum , decNum , mulNum , divNum } from './actions/index'


import './App.css';

const App=()=> {
const myState=useSelector((state)=> state.redu);
const myState2=useSelector((state)=> state.redu2);
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

    <div className='container mt4'>
      <h1>Multiplication/Division Counter</h1>
      <h4>Using React-Redux</h4>
       <div className='quantity'>
         <button className='btn btn-danger ' onClick={()=>{dispatch(divNum())}}>/</button>
          <input  type='text' value={myState2} />
         <button className='btn btn-success' onClick={()=>dispatch(mulNum())}>*</button>
         </div>    

    </div>
  </>
  );
}

export default App;
