import React from 'react';

const Task = ({tasky}) => {
    return (
        <div className="taask">
            
            {tasky.task}
            
        </div>
    )
}

export default Task;
