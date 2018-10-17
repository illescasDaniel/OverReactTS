import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AppRoutes from '../../config/appRoutes'
import * as styles from './App.css'

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <header/>
          <main role="main" className={styles.main}>
            <p className={styles.red}>hello!!</p>
            <Switch>
              <AppRoutes/>
            </Switch>
          </main>
          <footer/>
        </div>
      </BrowserRouter>
    )
  }
}