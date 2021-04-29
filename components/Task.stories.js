// Components/Task.stories.js

import * as React from 'react';
import { View } from 'react-native';
import { styles } from '../constants/globalStyles';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Task from './Task';

export const task = {
    id: 1,
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0)
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

storiesOf('Task', module)
    .addDecorator(story => <View style={styles.Task}>{story()}</View>)
    .add('default', () => <Task task={task} {...actions} />)
    .add('pinned', () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />)
    .add('archived', () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />);