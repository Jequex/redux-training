import React, {useState} from 'react';

const TaskForm = () => {
    
    const add = () => {
        console.log("adding....");
    };

    const deletes = () => {
        console.log("deleting...");
    };
    return (
        <div>
            <form>
                <label>Text</label>
                <input type="text" name="data" />
                <br />
                <label>Number</label>
                <input type="number" name="number"></input>
                <br />
                <br />
                <button onClick={add}>Add Task</button>{" "}
                <button onClick={deletes}>Delete Task</button>
            </form>
        </div>
    )
}

export default TaskForm
