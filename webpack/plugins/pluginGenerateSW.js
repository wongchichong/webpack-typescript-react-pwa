/**
 * Created by: Wong Chi Chong (wongchichong@gmail.com)
 */

import { GenerateSW } from 'workbox-webpack-plugin';

export const generateSW = new GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
})

