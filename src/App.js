import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Quiz from './quiz/App'

const Index = () => (
  <main>
    <h1>Migrating to React Hooks Minishop</h1>
    <nav
      style={{
        marginTop: '2rem',
        display: 'flex',
      }}
    >
      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Final Quiz</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/quiz">Exercise</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </main>
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/quiz">
        <Quiz />
      </Route>

      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)

export default App
