import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(){
    const [inputVal, setInputVal] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [editCon, setEditCon] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    


    function add(){
        if(editCon == true){
            let editedArray = [...todoItems];
            editedArray[editIndex] = inputVal;
            setTodoItems(editedArray);
            setEditIndex(null);
            setInputVal(''); ;
            setEditCon(false);
        }else if (inputVal.trim() !== "") {
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

    function editField(index){
        setEditCon(true);
        setInputVal(todoItems[index]);
        setEditIndex(index);
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
                    <ToDoItem key={index} text={item} deleteButton={() => deleteField(index)} editButton={() => editField(index)} />
                ))
            }
        </div>
        </>
    )

}

export default ToDoList;