// components/TaskList.stories.js
import * as React from 'react';
import { View } from 'react-native';
import { styles } from '../constants/globalStyles';
import { storiesOf } from '@storybook/react-native';
import { task, actions } from './Task.stories';
import PureTaskList from './TaskList';

export const defaultTasks = [
    {...task, id: '1', title: 'Task 1'},
    {...task, id: '2', title: 'Task 2'},
    {...task, id: '3', title: 'Task 3'},
    {...task, id: '4', title: 'Task 4'},
    {...task, id: '5', title: 'Task 5'},
    {...task, id: '6', title: 'Task 6'},
];

export const withPinnedTask = [
    ...defaultTasks.slice(0, 5),
    {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
];

storiesOf('PureTaskList', module)
    .addDecorator(story => <View style={[styles.TaskBox, {padding: 42}]}>{story()}</View>)
    .add('default', () => <PureTaskList task={defaultTasks} {...actions} />)
    .add('withPinnedTask', () => <PureTaskList task={withPinnedTask} {...actions} />)
    .add('loading', () => <PureTaskList loading task={[]} {...actions} />)
    .add('empty', () => <PureTaskList task={[]} {...actions} />)
