// components/TaskList.js
import * as React from 'react';
import Task from './Task';
import PercolateIcons from '../constants/Percolate';
import LoadingRow from './LoadingRow';
import { FlatList, Text, SafeAreaView } from 'react-native';
import { styles } from '../constants/globalStyles';
import { task } from './Task.stories';
import { PropTypes } from 'prop-types';

function PureTaskList({loading, tasks, onPinTask, onArchiveTask}) {
    const events = {
        onPinTask,
        onArchiveTask,
    };
    if(loading) {
        return (
            <SaveAreaView style={styles.ListItems}>
                {/* <Text>loading</Text> */}
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
                <LoadingRow />
            </SaveAreaView>
        );
    }
    if(task.length === 0) {
        return (
            <SaveAreaView style={styles.ListItems}>
            {/* <Text>empty</Text> */}
            <View style={styles.WrapperMessage}>
                <PercolateIcons name="check" size={64} color={'#2cc5d2'} />
                <Text style={styles.TitleMessage}>You have no tasks</Text>
                <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
            </View>
        </SaveAreaView>
        );
    }
    const taskInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => tstate !== 'TASK_PINNED'),
    ];
    return (
        <SaveAreaView style={styles.ListItems}>
            <FlatList 
                data={tasks}
                keyExtractor={task => task.id}
                renderItem={({item}) => <Task key={item.id} {...events} />}
            />
        </SaveAreaView>
    )
}

PureTaskList.PropTypes = {
    loading: PropTypes.boolean,
    tasks: PropTypes.arrayOf(Task.PropTypes.task).isRequired,
    onPinTask: PropTypes.func.isRequired,
    onArchiveTask: PropTypes.func.isRrequired
};

PureTaskList.defaultProps = {
    loading: false
}

export default PureTaskList;