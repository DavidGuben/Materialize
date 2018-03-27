import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Body from './Body'
import Features from './Features'
import Pricing from './Pricing'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/features' component={Features} />
      <Route path='/Pricing' component={Pricing} />
    </Switch>
  </main>
)

export default Main
