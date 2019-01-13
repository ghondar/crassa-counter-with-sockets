import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import('../containers/Dashboard'), {
  fallback: <Loading />
})

export default history => (
  <ConnectedRouter history={history}>
    <Route component={Dashboard} exact path='/' />
  </ConnectedRouter>
)
