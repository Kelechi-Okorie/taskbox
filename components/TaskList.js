// components/TaskList.js
import * as React from 'react';
import { PureTaskList } from './PureTasList';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

function TaskList({ tasks, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask,
        onArchiveTask,
    };
    return <PureTaskList tasks={tasks} {...events} />
}

export default connect(
    ({tasks}) => ({
        tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK.PINNED',)
    }),
    dispatch => ({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id))
    })
)(TaskList);
// export default TaskList;