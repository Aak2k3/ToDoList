

function ToDoItem(props) {

    function deleteField(e){
        console.log(e.target);
        props.deleteButton();
    }
     


    return (
        <div className="inputText">
            <div className="A">{props.text}</div>
            <div className="B"><input className="checkbox" type="checkbox" /></div>
            <div className="C">
                <div className="delete"  onClick={deleteField}><img src="https://img.icons8.com/?size=100&id=67884&format=png&color=000000" alt="" width="20px" /></div>
                <div className="edit"><img src="https://img.icons8.com/?size=100&id=71201&format=png&color=000000" alt="" width="20px" /></div>
            </div>
        </div>
    );
}

export default ToDoItem;


