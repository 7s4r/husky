import React, {Component} from 'react'
import './nav.scss'

export default class Nav extends Component {
  render() {
    return (
      <div className='mdl-layout__drawer'>
        <div className='mdl-layout-title'></div>
        <nav className='mdl-navigation'>
          <a className='mdl-navigation__link' href=''></a>
        </nav>
      </div>
  )
  }
}

React.render(
  <Nav />,
  document.getElementById('app')
)
