import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  // if (!items || items.length === 0) {
  //   return ("Data not found yet")
  // }else{
    const {items} = useContext(FeedbackContext);
  

    return (
      <div className="feedback-list">
        {items.map((element)=>{
          return <FeedbackItem key = {element.id} item={element}  />
        })}
         
      </div>
    )

}

export default FeedbackList
