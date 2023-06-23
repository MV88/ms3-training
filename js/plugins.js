// these are the framework plugins
import productPlugins from '@mapstore/product/plugins';
// this is the custom plugin
import HelloWorldPlugin from '@js/plugins/HelloWorld';

export default {
    requires: {
        ...productPlugins.requires
    },
    plugins: {
        ...productPlugins.plugins,
        HelloWorldPlugin
    }
};
