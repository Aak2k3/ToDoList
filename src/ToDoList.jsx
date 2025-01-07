import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(){
    const [inputVal, setInputVal] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    

    function add(){
        if (inputVal.trim() !== "") {
            setTodoItems([...todoItems, inputVal]);  
            setInputVal(''); 
        }
        
    }

    function inputText(e){
        setInputVal(e.target.value)
    }

    function deleteField(index) {
        const updatedItems = todoItems.filter((item, id) => id !== index); 
        setTodoItems(updatedItems); 
    }

    return(
        <>
        <div className="input">
            <input type="text" className="text" onChange={inputText} value={inputVal} />
            <button className="button" onClick={add}>ADD</button>
        </div>
        <div className="table">
            <div className="to-do">To DO</div>
            <div className="completed">Done?</div>
            <div className="del">Delete / Edit</div>
            

        </div>
        <div>
        {
                todoItems.map((item, index)=>(
                    <ToDoItem key={index} text={item} deleteButton={() => deleteField(index)} />
                ))
            }
        </div>
        </>
    )

}

export default ToDoList;