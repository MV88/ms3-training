import React from 'react';

import { createPlugin } from '@mapstore/utils/PluginsUtils';
import HelloWordComp from '@js/components/hellowordComp';

function HelloWorld() {
    return (
        <div>
            <HelloWordComp name="John" useFixedStyle />
        </div>
    );
}

export default createPlugin(
    'HelloWorld',
    {
        component: HelloWorld
    }
);
