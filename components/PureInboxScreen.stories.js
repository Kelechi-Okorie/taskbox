// components/PureInboxScreen.stories.js
import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { defaultTasks } from './PureTaskList.stories';
import PureInboxScreen from './PureInboxScreen';

// A super-simple mock of a redux store
const store = {
    getState: () => {
        return {
            task: defaultTasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

storiesOf('PureInboxScreen', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('default', () => <PureInboxScreen />)
    .add('error', () => <PureInboxScreen error="Something" />);