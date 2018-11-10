import * as React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home/Home'

export default class AppRoutes extends React.Component {

  public myHome = () => {
    return <Home text={'hello!'} testNumber={100} />
  }

  public render() {
    return (
      <Route key='' exact={true} path="/" render={this.myHome} />
      // <Route key='' exact={true} path="/" component={Home}/>
    )
  }
}