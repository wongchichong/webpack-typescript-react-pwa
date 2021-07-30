import React from 'react';
import AppContentWrapper from '../AppContentWrapper';

const AppHome = (): JSX.Element => (
    <AppContentWrapper>
        <h2 style={{ background: 'rose' }}>{AppHome.name}</h2>
    </AppContentWrapper>
);

export default AppHome;
