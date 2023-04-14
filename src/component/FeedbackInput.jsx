import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelct from './shared/RatingSelct'
import Card from './shared/card'
import { useEffect } from 'react'

function FeedbackInput() {

    const [Rating,setRating] = useState("");
    const [text,setText] = useState('');
    const [message,setMessage] = useState(null);
    const [Disabled,setDisabled] = useState(true);

    const {addFeedback,FeedbackUpdate,UpdateItems} = useContext(FeedbackContext);

    useEffect(()=>{
        if(FeedbackUpdate.edit === true){
            setText(FeedbackUpdate.item.text);
            setDisabled(false);
        }
    },[FeedbackUpdate]);


    const handleInput = (e)=>{
        if(text === ""){
            setDisabled(true);
            setMessage(null);
        }else if(text !== "" && text.trim().length <= 10){
            setDisabled(true);
            setMessage("Please Type at least 10 characters");
        }else{
            setDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleForm = (e)=>{
        e.preventDefault();
        if(text.trim().length >10){
            const newFeedback = {
                rating:Rating,
                text:text
            }


            if(FeedbackUpdate.edit === true){
                UpdateItems(FeedbackUpdate.item.id,newFeedback);
            }else{
                addFeedback(newFeedback);
            }


            setText('');
        }
        

    }

  return (
    <Card>
        <form onSubmit={handleForm} >
            <h4>How would you like to rate us?</h4>

            <RatingSelct Srating = {(rating)=>{setRating(rating)}}/>


            <div className="input-group">
                <input type="text" onChange={handleInput} placeholder='Write a review' value={text}/>
                <Button type="submit"   isDisable={Disabled}>Submit</Button>

            </div>
            {message && <div className = "message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackInput
