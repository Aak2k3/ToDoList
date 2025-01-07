import { useState } from 'react';


    function ToDoItem(props) {

        const [isChecked, setIsChecked] = useState(false);
    

        function Delete(){
            setIsChecked(false);
            props.deleteButton();
        }

        function Edit(){
            props.editButton();
            
        }
        
        function toggleCheck() {
            setIsChecked(!isChecked);
        }


        return (
            <div className="inputText">
                <div className="A">{props.text}</div>
                <div className="B"><input className="checkbox" checked={isChecked} onChange={toggleCheck}  type="checkbox" /></div>
                <div className="C">
                    <div className="delete"  onClick={Delete}><img src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000" alt="" width="20px" /></div>
                    <div className="edit" onClick={Edit}><img src="https://img.icons8.com/?size=100&id=71201&format=png&color=000000" alt="" width="20px" /></div>
                </div>
            </div>
        );
    }

    export default ToDoItem;


