import { useContext } from "react"
import Card from "./shared/card"
import { FaTimes, FaEdit } from "react-icons/fa"
import FeedbackContext from "../context/FeedbackContext"
import { useEffect } from "react";


function FeedbackItem({item}) {

    const { DeleteItem,EditItems } = useContext(FeedbackContext);


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button  className="close" onClick={()=>{DeleteItem(item.id)}}>
                <FaTimes color="purple"/>
            </button>
            <button className = "edit" onClick ={()=>{EditItems(item)}}>
                <FaEdit clolor = "purple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
