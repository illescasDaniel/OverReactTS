import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Button } from 'reactstrap'
import {log} from 'util'
import logo from '../../resources/logo.svg'

export interface IHomeProps { text: string; testNumber?: number; }

export default class Home extends React.Component<IHomeProps, {}> {

  public onForm1ButtonClick = (event: React.MouseEvent) => {
    log("hi")
    const buttonElement = event.nativeEvent.target as HTMLButtonElement
    if (buttonElement != null) {
      log(buttonElement.innerText)
    }
  }

  public render() {
    const { text, testNumber} = this.props
    return (
      <div>
        <Button onClick={this.onForm1ButtonClick}>
          <FontAwesomeIcon icon={faCoffee} /> {text} {testNumber}
        </Button>
        <img src={logo}/>
      </div>
    )
  }
}