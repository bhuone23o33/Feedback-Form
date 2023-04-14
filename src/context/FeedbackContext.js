import { createContext,useState } from "react";
import { v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/feedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children })=>{
    const [items,setFeedback] = useState(FeedbackData);

    // for update items
    const [FeedbackUpdate,setFeedbackUpdate] = useState(
        {
            item:{},
            edit:false,
        }
    );

    // add function
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
  
        setFeedback([newFeedback,...items]);
  
    }
    
    // set item
    const EditItems = (item)=>{
        setFeedbackUpdate({
            item,
            edit:true,
        })
    }

    // update item 
    const UpdateItems= (id,upde)=>{
        setFeedback(items.map(item => item.id === id ? {...item,...upde}:item))
    }

    // delete function 
    function DeleteItem(id){
        if(window.confirm("Are you sure you want to delete?")){
          setFeedback(items.filter((item)=>item.id !== id));
        }
    }

    return <FeedbackContext.Provider
        value = {{
            items,
            FeedbackUpdate,
            DeleteItem,
            addFeedback,
            EditItems,
            UpdateItems,
            }
        }
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
