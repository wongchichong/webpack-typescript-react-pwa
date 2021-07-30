import React from 'react';
import AppHeader from './components/AppHeader';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Suspense } from 'react';
const AppHome = React.lazy(() => import('@components/pages/AppHome'))
const AppAbout = React.lazy(() => import('@components/pages/AppAbout'))
const AppTopics = React.lazy(() => import('@components/pages/topics/AppTopics'))
const AppTopicDetail = React.lazy(() => import('@components/pages/topics/AppTopicDetail'))
const AppQueryStrings = React.lazy(() => import('@components/pages/AppQueryStrings'))

export enum AppRoutes {
    home = '/',
    about = '/about',
    topics = '/topics',
    topicId = '/topics/:topicId',
    queryStrings = '/query-strings'
}


const AppContainer = styled.div`
  height: 100%;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = (props: any): JSX.Element => (
    <AppContainer>
        <AppHeader />
        <Suspense fallback={<div>Loading...</div>}>
            <Route path={AppRoutes.home} exact component={AppHome} />
            <Route path={AppRoutes.about} component={AppAbout} />
            <Route path={AppRoutes.topics} component={AppTopics} />
            <Route path={AppRoutes.queryStrings} component={AppQueryStrings} />

            <Route path={AppRoutes.topicId} component={AppTopicDetail} />
        </Suspense>

        {/* <Switch>
      <Route path={AppRoutes.home} exact component={AppHome} />
      <Route path={AppRoutes.about} exact component={AppAbout} />
      <Route path={AppRoutes.topics} exact component={AppTopics} />

      <Route path={AppRoutes.topicId} exact component={AppTopicDetail} />
    </Switch> */}

        {/* <Route path={AppRoutes.home}>
      <AppHome />
    </Route>
    <Route path={AppRoutes.about}>
      <AppAbout />
    </Route>
    <Route path={AppRoutes.topics}>
      <AppTopics />
    </Route> */}

    </AppContainer>

);

export default App;
