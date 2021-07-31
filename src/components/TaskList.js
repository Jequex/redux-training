import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import PropTypes from 'prop-types';
import { get_tasks } from '../redux/actions';

const TaskList = ({ tasks: { tasks } }) => {
    useEffect(() => {
        get_tasks();
    }, []);

    // const lists = [1, 2, 3, 4];
    // console.log(get_tasks());

    const get_tasks = async () => {
        const res = await fetch("/tasks");

    }

    return (
        <div className="Tasks">
            {
                tasks.map((num) => 
                    <Task key={ num }/>
                )
            }
        </div>
    )
}

TaskList.propTypes = {tasks: PropTypes.array.isRequired,}

const mapStateToProps = state => ({
    tasks: state.task
});

export default connect(mapStateToProps, {get_tasks})(TaskList);
