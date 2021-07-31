import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import PropTypes from 'prop-types';
import { get_tasks, set_loading } from '../redux/actions';

const TaskList = ({ tasks, loading, get_tasks, set_loading }) => {
    useEffect(() => {
        set_loading();
        get_tasks();
        //eslint-disable-next-line
    }, []);

    if (loading || tasks === undefined) {
        return (
            <div className="">Loading....</div>
        )
    } else {
        return (
            <div>
                {
                    tasks.map((task) => {
                        return (
                            <Task key={task.id} tasky={task}/>
                        )
                    })
                }
            </div>
    );
    }

    
}

TaskList.propTypes = {tasks: PropTypes.array}

const mapStateToProps = state => ({
    tasks: state.task.tasks,
    loading: state.task.state.loading
});

export default connect(mapStateToProps, {get_tasks, set_loading})(TaskList);
