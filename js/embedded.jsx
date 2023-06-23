/**
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import('@mapstore/product/embedded');
import {
    setConfigProp,
    setLocalConfigurationFile
} from '@mapstore/utils/ConfigUtils';

import "../assets/css/custom.css";

setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
setConfigProp('themePrefix', 'ms3-training');

/**
 * Use a custom plugins configuration file with:
 *
 * setLocalConfigurationFile('localConfig.json');
 */
setLocalConfigurationFile('configs/localConfig.json');
