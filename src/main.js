import cloudAdminDesigner from './init';
import metaData from './metaData';
import platformConfig from './platform.config.json';
import { routes } from './router/routes';

import './library';

import '@/assets/css/index.css';

cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
