import React from 'react';
import Task from './Task';

const TaskList = () => {

    const lists = [1, 2, 3, 4];

    return (
        <div className="Tasks">
            {
                lists.map((num) => 
                    <Task key={ num }/>
                )
            }
        </div>
    )
}

export default TaskList;
