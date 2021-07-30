import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import PropTypes from 'prop-types';
import { get_tasks } from '../redux/actions';

const TaskList = ({ tasks }) => {

    // const lists = [1, 2, 3, 4];
    get_tasks();

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
