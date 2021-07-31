import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Task from './Task';
import PropTypes from 'prop-types';
import { get_tasks, set_loading } from '../redux/actions';

const TaskList = ({ tasks, loading, get_tasks, set_loading }) => {
    useEffect(() => {
        set_loading();
        get_tasks();
    }, []);

    if (loading || tasks === null) {
        return (
            <div className="">Loading....</div>
        )
    }

    console.log(tasks)

    return (
        <div>
            {
                tasks.tasks.map((a) => {
                    return (
                        <div>a</div>
                    )
                })
            }
        </div>
    );
}

TaskList.propTypes = {tasks: PropTypes.array.isRequired,}

const mapStateToProps = state => ({
    tasks: state.task,
    loading: state.task.state.loading
});

export default connect(mapStateToProps, {get_tasks, set_loading})(TaskList);
