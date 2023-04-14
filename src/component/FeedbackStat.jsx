import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackStat() {

  const {items} = useContext(FeedbackContext);
  let average = items.reduce((acc,curr)=>{
    return acc + curr.rating;
  },0) / items.length;

  average = average.toFixed(1);
  return (
    <div className='feedback-stats'>
      <h4>{items.length} Reviews</h4>
      <h4>Rating:{average}</h4>
    </div>
  )
}

export default FeedbackStat
