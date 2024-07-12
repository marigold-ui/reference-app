import { useState } from 'react';
import {Button, MarigoldProvider, Stack} from '@marigold/components';
import theme from '@marigold/theme-core';

const MyButton = () => {
    const [count, setCount] = useState(0);

    return (
        <Button onPress={() => setCount(count + 1)} size='small'>
            Clicked {count} times
        </Button>
    );
}

const Counter = () => {
    return (
        <MarigoldProvider theme={theme}>
            <div>
                <MyButton />
            </div>
        </MarigoldProvider>
    );
}

export default Counter;