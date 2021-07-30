/**
 * Created by: Wong Chi Chong (wongchichong@gmail.com)
 */

import { InjectManifest } from 'workbox-webpack-plugin';

export const injectManifest = new InjectManifest({ swSrc: './dist/service-worker.js', })

