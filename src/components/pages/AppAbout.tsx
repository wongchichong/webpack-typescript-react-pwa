import React from 'react';
import AppContentWrapper from '../AppContentWrapper';

const AppAbout = (): JSX.Element => (
    <AppContentWrapper>
        <h2 style={{ background: 'aqua' }}>{AppAbout.name}</h2>
    </AppContentWrapper>
);

export default AppAbout;
