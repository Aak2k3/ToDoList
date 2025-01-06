import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(){
    const [inputVal, setInputVal] = useState('');

    

    function add(){
        console.log(inputVal)
        
    }

    function inputText(e){
        setInputVal(e.target.value)
    }

    return(
        <>
        <div className="input">
            <input type="text" className="text" onChange={inputText} />
            <button className="button" onClick={add}>ADD</button>
        </div>
        <div className="table">
            <div className="to-do">To DO</div>
            <div className="completed">Completed?</div>
            <div className="del">Delete / Edit</div>

        </div>
        </>
    )

}

export default ToDoList;