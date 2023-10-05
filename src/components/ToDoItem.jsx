import React, { useState } from "react";

// function ToDoItem(props) {
//     const [isDone, setIsdone] = useState(false);

//     function handleClick(){
//         setIsdone(prevValue => !prevValue);
//     }

//     return (
//         <div onClick={handleClick}>
//             <li style={{textDecoration : isDone ? "line-through" : "none"}}>{props.value}</li>
//         </div>
//     )
// }

// export default ToDoItem;
function ToDoItem(props) {

    return (
        <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
            <li>{props.value}</li>
        </div>
    )
}

export default ToDoItem;