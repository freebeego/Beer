import React, { FC } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { routes } from '@constants/routes'

import Catalog from '@components/Catalog'
import Details from '@components/Details'

import s from './styles.module.styl'

const App: FC = () => (
  <div className={s.container}>
    <Switch>
      <Route exact path={routes.root}>
        <Catalog />
      </Route>

      <Route exact path={routes.details}>
        <Details />
      </Route>

      <Route path={routes.root}>
        <Redirect to={routes.root} />
      </Route>
    </Switch>
  </div>
)

export default App
