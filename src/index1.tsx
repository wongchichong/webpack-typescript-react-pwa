/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import '@styles/styles.less';
import '@styles/styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

//import { App } from '@components/app/app';
const App = (await import('@components/app/app')).App

ReactDom.render(<App />, document.getElementById('root'));
