import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Body from './Body'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import SocialMedia from './SocialMedia'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/About' component={About} />
      <Route path='/Services' component={Services} />
      <Route path='/Portfolio' component={Portfolio} />
      <Route path='/Contact' component={Contact} />
      <Route path='/SocialMedia' component={SocialMedia} />
    </Switch>
  </main>
)

export default Main
