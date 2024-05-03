
import React, {useState} from 'react';
import Draggable from 'react-draggable';


const Text = () => {

    const [editMode, seteditMode] = useState(false);
    const [val, setval] = useState("Double click to edit");
    return (
    <Draggable>
        {editMode?(<input 
        onDoubleClick={(e)=>seteditMode(false)}
        value={val}
        onChange={(e)=>setval(e.target.value)}/>)
        :(<h1 onDoubleClick={(e)=>seteditMode(true)}>{val}</h1>)}
    </Draggable>
    )
}

export default Text;