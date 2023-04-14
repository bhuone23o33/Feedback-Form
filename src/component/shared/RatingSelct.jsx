import React from 'react'
import {useState} from 'react'
import { useContext } from 'react';
import FeedbackContext from '../../context/FeedbackContext';
import { useEffect } from 'react';

function RatingSelct({Srating}) {

    const [Selected, setSelected] = useState(0);
    const {FeedbackUpdate} = useContext(FeedbackContext);


    useEffect(()=>{
        if(FeedbackUpdate.edit === true){
            setSelected(FeedbackUpdate.item.rating);
        }
    },[FeedbackUpdate])

    function handleChange(e){
        setSelected(+e.target.value);
        Srating(+e.target.value);
    }



  return (
    <ul className="rating">
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="1"
                id="num1"
                onChange = {handleChange}
                checked={Selected === 1} 
            />
            <label htmlFor = "num1">1</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="2"
                id="num2"
                onChange = {handleChange}
                checked={Selected === 2} 
            />
            <label htmlFor = "num2">2</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="3"
                id="num3"

                onChange = {handleChange}
                checked={Selected === 3} 
            />
            <label htmlFor = "num3">3</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="4"
                id="num4"
                onChange = {handleChange}
                checked={Selected === 4} 
            />
            <label htmlFor = "num4">4</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="5"
                id="num5"
                onChange = {handleChange}
                checked={Selected === 5} 
            />
            <label htmlFor = "num5">5</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="6"
                id="num6"
                onChange = {handleChange}
                checked={Selected === 6} 
            />
            <label htmlFor = "num6">6</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="7"
                id="num7"
                onChange = {handleChange}
                checked={Selected === 7} 
            />
            <label htmlFor = "num7">7</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="8"
                id="num8"
                onChange = {handleChange}
                checked={Selected === 8} 
            />
            <label htmlFor = "num8">8</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="9"
                id="num9"
                onChange = {handleChange}
                checked={Selected === 9} 
            />
            <label htmlFor = "num9">9</label>
        </li>
        <li>
            <input 
                type="radio" 
                name="rating" 
                value="10"
                id="num10"
                onChange = {handleChange}
                checked={Selected === 10} 
            />
            <label htmlFor = "num10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelct
