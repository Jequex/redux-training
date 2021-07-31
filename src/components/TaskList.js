import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import PropTypes from 'prop-types';
import { get_tasks } from '../redux/actions';

const TaskList = ({ tasks, get_tasks }) => {
    useEffect(() => {
        get_tasks();
    }, [get_tasks]);

    return (
        <Fragment>
            {
                tasks.map(a => {
                    return (
                        <p>a</p>
                    )
                })
            }
        </Fragment>
    );
}

TaskList.propTypes = {tasks: PropTypes.array.isRequired,}

const mapStateToProps = state => ({
    tasks: state.task.state.tasks
});

export default connect(mapStateToProps, {get_tasks})(TaskList);
